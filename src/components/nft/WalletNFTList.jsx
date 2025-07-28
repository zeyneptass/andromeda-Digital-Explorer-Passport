"use client";

import React, { useEffect, useState } from "react";
import NFTCard from "./NFTCard";
import { ANDROMEDA_RPC } from "../../config/contracts";

const WalletNFTList = ({ contractAddress, walletAddress }) => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Test function for Louvre NFT metadata
  const testLouvreMetadata = async () => {
    try {
      const axios = (await import("axios")).default;
      const louvreMetadataUrl = "https://gateway.pinata.cloud/ipfs/bafybeicunakt4uueqr2f4c2und55zur2mvjrikkcr6fm635pnf4aaoqrou/louvre.json";
      
      console.log("🧪 Testing Louvre metadata URL:", louvreMetadataUrl);
      
      const response = await axios.get(louvreMetadataUrl, { timeout: 15000 });
      console.log("✅ Louvre metadata fetched successfully:", response.data);
      
      return response.data;
    } catch (error) {
      console.error("❌ Louvre metadata test failed:", error);
      return null;
    }
  };

  useEffect(() => {
    async function fetchNFTs() {
      setLoading(true);
      setError(null);

      // Test Louvre metadata first
      await testLouvreMetadata();

      try {
        const { CosmWasmClient } = await import("@cosmjs/cosmwasm-stargate");
        const axios = (await import("axios")).default;

        const client = await CosmWasmClient.connect(ANDROMEDA_RPC);

        const tokensResponse = await client.queryContractSmart(contractAddress, {
          tokens: { owner: walletAddress },
        });

        const tokenIds = tokensResponse.tokens || [];
        console.log("🔍 Found token IDs:", tokenIds);

        const nftData = await Promise.all(
          tokenIds.map(async (tokenId) => {
            try {
              const nftInfo = await client.queryContractSmart(contractAddress, {
                nft_info: { token_id: tokenId },
              });

              console.log(`📦 NFT Info for ${tokenId}:`, nftInfo);

              let metaUrl = nftInfo.token_uri;
              console.log("🧪 Original token_uri:", metaUrl);

              // Handle IPFS URLs
              if (metaUrl?.startsWith("ipfs://")) {
                metaUrl = metaUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
              }

              // Try multiple IPFS gateways if the first one fails
              const ipfsGateways = [
                "https://ipfs.io/ipfs/",
                "https://gateway.pinata.cloud/ipfs/",
                "https://cloudflare-ipfs.com/ipfs/",
                "https://dweb.link/ipfs/"
              ];

              let meta = {
                name: tokenId,
                description: "Metadata could not be retrieved.",
                image: "",
              };

              let metadataFetched = false;

              // Try to fetch metadata from the original URL first
              try {
                console.log("📡 Trying original URL:", metaUrl);
                const { data } = await axios.get(metaUrl, { timeout: 10000 });
                meta = data;
                metadataFetched = true;
                console.log("✅ Metadata fetched from original URL:", meta);
              } catch (originalError) {
                console.warn("⚠️ Original URL failed:", originalError.message);
              }

              // If original URL failed and it's an IPFS URL, try other gateways
              if (!metadataFetched && metaUrl?.includes("ipfs")) {
                const ipfsHash = metaUrl.split("/ipfs/")[1];
                if (ipfsHash) {
                  for (const gateway of ipfsGateways) {
                    try {
                      const gatewayUrl = gateway + ipfsHash;
                      console.log("📡 Trying gateway:", gatewayUrl);
                      const { data } = await axios.get(gatewayUrl, { timeout: 10000 });
                      meta = data;
                      metadataFetched = true;
                      console.log("✅ Metadata fetched from gateway:", gateway, meta);
                      break;
                    } catch (gatewayError) {
                      console.warn("⚠️ Gateway failed:", gateway, gatewayError.message);
                    }
                  }
                }
              }

              if (!metadataFetched) {
                console.error("❌ All metadata fetch attempts failed for token:", tokenId);
              }

              let image = meta.image || meta.image_url || meta.img || "";

              // Handle IPFS image URLs
              if (image.startsWith("ipfs://")) {
                image = image.replace("ipfs://", "https://ipfs.io/ipfs/");
              }

              console.log("🎯 Final NFT Data", {
                tokenId,
                token_uri: metaUrl,
                image_raw: meta.image,
                image_final: image,
                metadata: meta,
              });

              return {
                tokenId,
                contractAddress,
                ...meta,
                image,
                visitStatus: 'not_visited'
              };
            } catch (tokenError) {
              console.error(`❌ Error processing token ${tokenId}:`, tokenError);
              return {
                tokenId,
                contractAddress,
                name: tokenId,
                description: "Error loading NFT metadata",
                image: "",
                visitStatus: 'not_visited'
              };
            }
          })
        );

        // Filter out any failed NFTs
        const validNFTs = nftData.filter(nft => nft);
        console.log("🎉 Final NFTs:", validNFTs);

        setNfts(validNFTs);
      } catch (err) {
        console.error("❌ Error in fetchNFTs:", err);
        setError("Error retrieving NFTs: " + (err?.message || err));
      } finally {
        setLoading(false);
      }
    }

    if (contractAddress && walletAddress) {
      fetchNFTs();
    }
  }, [contractAddress, walletAddress]);

  const handleCheckInSuccess = (result) => {
    // Update NFT when check-in is successful
    setNfts(prevNfts => 
      prevNfts.map(nft => 
        nft.tokenId === result.tokenId 
          ? { ...nft, visitStatus: 'visited' }
          : nft
      )
    );

    // Show success message
    alert(`🎉 Congratulations! Your visit to ${result.locationName} has been confirmed. You earned +${result.xpReward} XP!`);
  };

  if (loading) return <div>Loading NFTs...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (nfts.length === 0) return <div>No NFTs found.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {nfts.map((nft) => (
        <NFTCard
          key={nft.tokenId}
          nft={nft}
          walletAddress={walletAddress}
          onCheckInSuccess={handleCheckInSuccess}
        />
      ))}
    </div>
  );
};

export default WalletNFTList;
