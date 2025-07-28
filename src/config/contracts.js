// Main Application Contract Address
export const MAIN_APP_CONTRACT =
  "andr1hpx7y1n9zt3zmaah0vcfazprudnre5krtnck9n3xn9x62zcgpdxq9j7vg6";

// City Collection Contract Addresses
export const CITY_CONTRACTS = {
  // Paris (cw721-1)
  paris: "andr1uu7u4nyhzyjspvl3dmvqulukfydtkq752deq27qhvmpmsqug6a3qy9v5dt",

  // Krakow (cw721-2)
  krakow: "andr1pltnhgxkc6na04ezk2pxcwmtk85a99pw957neah7dak7qd29e69st78vj6",

  // Brussels (cw721-3)
  brussels: "andr1cekwpfunp9wu2qz8mt7pye4a8shw3zwkn0ctdql39dge5e7fgchsr3cnhn",

  // Vienna (cw721-4)
  vienna: "andr1da7n7smpnxe2ddepmhsd67qrmmul695akhj3dh5r8ewtzmwq46as9dmvd0",

  // Prague (cw721-5)
  prague: "andr1fm6nj4xlfr7ug29ww34d6krgvha2arugf6sa6pnj9z0ncfuppz9sglfvs8",

  // Lisbon (cw721-6)
  lisbon: "andr10ccy45ham67yre675tsgmz4ecsjfpft55cfsrhek0w9sp7npheasjntwa9",

  // Porto (cw721-7)
  porto: "andr1g42ncu3sw2cchug8rukpgkfly2e4msnrpm3wttan373vjfty6vyqumv24h",

  // Madrid (cw721-8)
  madrid: "andr1jydn3hraqrm0jjucjtl5pfwyve2c67y6e9waf0tw3vc6wylyyets9s0gvl",

  // Rotterdam (cw721-9)
  rotterdam: "andr1anxf5wzpund3vu6g0r80twq70crrxt9xa40sukk8fa2rncgaz7gswhwrcp",

  // Antalya (cw721-10)
  antalya: "andr16z06wkgp8lv5j39q3rnkdd93ghq5gdcn5v9g5h9nnpmekqjdzclskywyly",

  // Istanbul (cw721-11)
  istanbul: "andr1ye6prf467ywgefqc0q9vrpt06ccr7c243syrt5e794myau23cgdq5lk2v7",
};

// Collection Symbols for each city
export const COLLECTION_SYMBOLS = {
  paris: "FRH", // France Heritage
  krakow: "PLH", // Poland Heritage
  brussels: "BEH", // Belgium Heritage
  vienna: "ATH", // Austria Heritage
  prague: "CZH", // Czech Heritage
  lisbon: "PTH", // Portugal Heritage
  porto: "PTH", // Portugal Heritage
  madrid: "ESH", // Spain Heritage
  rotterdam: "NLH", // Netherlands Heritage
  antalya: "TRH", // Turkey Heritage
  istanbul: "TRH", // Turkey Heritage
};

// Andromeda RPC Endpoint
export const ANDROMEDA_RPC = "https://api.andromedaprotocol.io/rpc/testnet";

// Get contract address by city ID
export function getContractAddress(cityId) {
  return CITY_CONTRACTS[cityId] || null;
}

// Get collection symbol by city ID
export function getCollectionSymbol(cityId) {
  return COLLECTION_SYMBOLS[cityId] || null;
}

// Validate contract address
export function isValidContractAddress(address) {
  return address && address.startsWith("andr1") && address.length === 64;
}
