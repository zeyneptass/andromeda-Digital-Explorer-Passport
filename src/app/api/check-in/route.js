import { NextResponse } from "next/server";

// Simple database simulation (in real application, use PostgreSQL, MongoDB, etc.)
const usedNonces = new Set();
const locationMappings = {
  // Paris
  "LOUVRE-MUSEUM-FR-01": {
    collectionSymbol: "FRH",
    contractAddress:
      "andr1uu7u4nyhzyjspvl3dmvqulukfydtkq752deq27qhvmpmsqug6a3qy9v5dt",
    xpReward: 150,
  },
  "EIFFEL-TOWER-FR-01": {
    collectionSymbol: "FRH",
    contractAddress:
      "andr1uu7u4nyhzyjspvl3dmvqulukfydtkq752deq27qhvmpmsqug6a3qy9v5dt",
    xpReward: 100,
  },
  // Krakow
  "WIELICZKA-SALT-MINE-PL-01": {
    collectionSymbol: "PLH",
    contractAddress:
      "andr1pltnhgxkc6na04ezk2pxcwmtk85a99pw957neah7dak7qd29e69st78vj6",
    xpReward: 120,
  },
  // Brussels
  "GRAND-PLACE-BE-01": {
    collectionSymbol: "BEH",
    contractAddress:
      "andr1cekwpfunp9wu2qz8mt7pye4a8shw3zwkn0ctdql39dge5e7fgchsr3cnhn",
    xpReward: 140,
  },
  // Vienna
  "SCHONBRUNN-PALACE-AT-01": {
    collectionSymbol: "ATH",
    contractAddress:
      "andr1da7n7smpnxe2ddepmhsd67qrmmul695akhj3dh5r8ewtzmwq46as9dmvd0",
    xpReward: 160,
  },
  // Prague
  "PRAGUE-CASTLE-CZ-01": {
    collectionSymbol: "CZH",
    contractAddress:
      "andr1fm6nj4xlfr7ug29ww34d6krgvha2arugf6sa6pnj9z0ncfuppz9sglfvs8",
    xpReward: 130,
  },
  // Lisbon
  "BELEM-TOWER-PT-01": {
    collectionSymbol: "PTH",
    contractAddress:
      "andr10ccy45ham67yre675tsgmz4ecsjfpft55cfsrhek0w9sp7npheasjntwa9",
    xpReward: 125,
  },
  // Porto
  "RIBEIRA-DISTRICT-PT-01": {
    collectionSymbol: "PTH",
    contractAddress:
      "andr1g42ncu3sw2cchug8rukpgkfly2e4msnrpm3wttan373vjfty6vyqumv24h",
    xpReward: 110,
  },
  // Madrid
  "PRADO-MUSEUM-ES-01": {
    collectionSymbol: "ESH",
    contractAddress:
      "andr1jydn3hraqrm0jjucjtl5pfwyve2c67y6e9waf0tw3vc6wylyyets9s0gvl",
    xpReward: 145,
  },
  // Rotterdam
  "CUBE-HOUSES-NL-01": {
    collectionSymbol: "NLH",
    contractAddress:
      "andr1anxf5wzpund3vu6g0r80twq70crrxt9xa40sukk8fa2rncgaz7gswhwrcp",
    xpReward: 115,
  },
  // Antalya
  "KALEICI-DISTRICT-TR-01": {
    collectionSymbol: "TRH",
    contractAddress:
      "andr16z06wkgp8lv5j39q3rnkdd93ghq5gdcn5v9g5h9nnpmekqjdzclskywyly",
    xpReward: 135,
  },
  // Istanbul
  "HAGIA-SOPHIA-TR-01": {
    collectionSymbol: "TRH",
    contractAddress:
      "andr1ye6prf467ywgefqc0q9vrpt06ccr7c243syrt5e794myau23cgdq5lk2v7",
    xpReward: 180,
  },
  "BLUE-MOSQUE-TR-01": {
    collectionSymbol: "TRH",
    contractAddress:
      "andr1ye6prf467ywgefqc0q9vrpt06ccr7c243syrt5e794myau23cgdq5lk2v7",
    xpReward: 160,
  },
};

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      locationId,
      nonce,
      walletAddress,
      tokenId,
      contractAddress,
      collectionSymbol,
    } = body;

    // 1. Check required fields
    if (
      !locationId ||
      !nonce ||
      !walletAddress ||
      !tokenId ||
      !contractAddress
    ) {
      return NextResponse.json(
        { success: false, error: "Missing parameters" },
        { status: 400 }
      );
    }

    // 2. Check if nonce has been used before
    if (usedNonces.has(nonce)) {
      return NextResponse.json(
        { success: false, error: "This QR code has been used before" },
        { status: 400 }
      );
    }

    // 3. Check if location ID is valid
    const locationData = locationMappings[locationId];
    if (!locationData) {
      return NextResponse.json(
        { success: false, error: "Invalid location" },
        { status: 400 }
      );
    }

    // 4. Check if collection symbol matches
    if (
      collectionSymbol &&
      locationData.collectionSymbol !== collectionSymbol
    ) {
      return NextResponse.json(
        { success: false, error: "Collection mismatch" },
        { status: 400 }
      );
    }

    // 5. Check if contract address matches
    if (locationData.contractAddress !== contractAddress) {
      return NextResponse.json(
        { success: false, error: "Contract address mismatch" },
        { status: 400 }
      );
    }

    // 6. Check NFT ownership (in real application, check from blockchain)
    // For this example, we do a simple check
    const isValidOwner = await checkNFTOwnership(
      walletAddress,
      tokenId,
      contractAddress
    );
    if (!isValidOwner) {
      return NextResponse.json(
        { success: false, error: "This NFT does not belong to you" },
        { status: 400 }
      );
    }

    // 7. Execute check-in on blockchain
    const blockchainResult = await executeCheckInOnBlockchain(
      walletAddress,
      tokenId,
      contractAddress,
      locationId
    );

    if (!blockchainResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Blockchain transaction failed: " + blockchainResult.error,
        },
        { status: 500 }
      );
    }

    // 8. Mark nonce as used
    usedNonces.add(nonce);

    // 9. Return successful response
    return NextResponse.json({
      success: true,
      message: "Check-in successful!",
      xpReward: locationData.xpReward,
      locationName: getLocationName(locationId),
      transactionHash: blockchainResult.transactionHash,
    });
  } catch (error) {
    console.error("Check-in API error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}

// Function to check NFT ownership (simulation)
async function checkNFTOwnership(walletAddress, tokenId, contractAddress) {
  // In real application, this function checks NFT ownership from Andromeda blockchain
  // For now, we always return true
  return true;
}

// Function to execute check-in on blockchain (simulation)
async function executeCheckInOnBlockchain(
  walletAddress,
  tokenId,
  contractAddress,
  locationId
) {
  try {
    // In real application, this function:
    // 1. Initializes Andromeda client
    // 2. Sends execute transaction with admin wallet
    // 3. Updates NFT's visit status

    // For simulation, return successful result
    return {
      success: true,
      transactionHash:
        "andr1" +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15),
    };
  } catch (error) {
    console.error("Blockchain transaction error:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}

// Function to return location name
function getLocationName(locationId) {
  const locationNames = {
    // Paris
    "LOUVRE-MUSEUM-FR-01": "Louvre Museum",
    "EIFFEL-TOWER-FR-01": "Eiffel Tower",
    // Krakow
    "WIELICZKA-SALT-MINE-PL-01": "Wieliczka Salt Mine",
    // Brussels
    "GRAND-PLACE-BE-01": "Grand Place",
    // Vienna
    "SCHONBRUNN-PALACE-AT-01": "Schönbrunn Palace",
    // Prague
    "PRAGUE-CASTLE-CZ-01": "Prague Castle",
    // Lisbon
    "BELEM-TOWER-PT-01": "Belém Tower",
    // Porto
    "RIBEIRA-DISTRICT-PT-01": "Ribeira District",
    // Madrid
    "PRADO-MUSEUM-ES-01": "Prado Museum",
    // Rotterdam
    "CUBE-HOUSES-NL-01": "Cube Houses",
    // Antalya
    "KALEICI-DISTRICT-TR-01": "Kaleiçi District",
    // Istanbul
    "HAGIA-SOPHIA-TR-01": "Hagia Sophia",
    "BLUE-MOSQUE-TR-01": "Sultanahmet Mosque",
  };

  return locationNames[locationId] || locationId;
}
