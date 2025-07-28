# QR Code Test Files

This folder is used for test QR codes.

## Test QR Codes

Convert the following JSON data to QR codes using a QR code generator:

### 1. Paris - Louvre Museum
```json
{
  "locationId": "LOUVRE-MUSEUM-FR-01",
  "collectionSymbol": "FRH",
  "nonce": "louvre_2024_001"
}
```

### 2. Paris - Eiffel Tower
```json
{
  "locationId": "EIFFEL-TOWER-FR-01",
  "collectionSymbol": "FRH",
  "nonce": "eiffel_2024_001"
}
```

### 3. Krakow - Wieliczka Salt Mine
```json
{
  "locationId": "WIELICZKA-SALT-MINE-PL-01",
  "collectionSymbol": "PLH",
  "nonce": "wieliczka_2024_001"
}
```

### 4. Brussels - Grand Place
```json
{
  "locationId": "GRAND-PLACE-BE-01",
  "collectionSymbol": "BEH",
  "nonce": "grandplace_2024_001"
}
```

### 5. Vienna - Schönbrunn Palace
```json
{
  "locationId": "SCHONBRUNN-PALACE-AT-01",
  "collectionSymbol": "ATH",
  "nonce": "schonbrunn_2024_001"
}
```

### 6. Prague - Prague Castle
```json
{
  "locationId": "PRAGUE-CASTLE-CZ-01",
  "collectionSymbol": "CZH",
  "nonce": "praguecastle_2024_001"
}
```

### 7. Lisbon - Belém Tower
```json
{
  "locationId": "BELEM-TOWER-PT-01",
  "collectionSymbol": "PTH",
  "nonce": "belem_2024_001"
}
```

### 8. Porto - Ribeira District
```json
{
  "locationId": "RIBEIRA-DISTRICT-PT-01",
  "collectionSymbol": "PTH",
  "nonce": "ribeira_2024_001"
}
```

### 9. Madrid - Prado Museum
```json
{
  "locationId": "PRADO-MUSEUM-ES-01",
  "collectionSymbol": "ESH",
  "nonce": "prado_2024_001"
}
```

### 10. Rotterdam - Cube Houses
```json
{
  "locationId": "CUBE-HOUSES-NL-01",
  "collectionSymbol": "NLH",
  "nonce": "cubehouses_2024_001"
}
```

### 11. Antalya - Kaleiçi District
```json
{
  "locationId": "KALEICI-DISTRICT-TR-01",
  "collectionSymbol": "TRH",
  "nonce": "kaleici_2024_001"
}
```

### 12. Istanbul - Hagia Sophia
```json
{
  "locationId": "HAGIA-SOPHIA-TR-01",
  "collectionSymbol": "TRH",
  "nonce": "ayasofya_2024_001"
}
```

### 13. Istanbul - Sultanahmet Mosque
```json
{
  "locationId": "BLUE-MOSQUE-TR-01",
  "collectionSymbol": "TRH",
  "nonce": "sultanahmet_2024_001"
}
```

## QR Code Generation

To convert these JSON data to QR codes:
1. Use a site like https://www.qr-code-generator.com/
2. Copy and paste the JSON data
3. Download the QR code and use it for testing

## Test Scenarios

1. **Successful Check-in**: NFT owner performs check-in with correct QR code
2. **Wrong Location**: Attempts to check-in with QR code from different location
3. **Reuse**: Attempts to use the same QR code twice
4. **Invalid QR**: Attempts to read corrupted or invalid QR code

## City Information

- **Capitals**: Paris (France), Brussels (Belgium), Vienna (Austria), Prague (Czech Republic), Lisbon (Portugal), Madrid (Spain)
- **Other Cities**: Krakow (Poland), Porto (Portugal), Rotterdam (Netherlands), Antalya (Turkey), Istanbul (Turkey)

## Contract Addresses

### Main Application Contract
- **Address**: `andr1hpx7y1n9zt3zmaah0vcfazprudnre5krtnck9n3xn9x62zcgpdxq9j7vg6`

### City Collection Contracts
- **Paris**: `andr1uu7u4nyhzyjspvl3dmvqulukfydtkq752deq27qhvmpmsqug6a3qy9v5dt`
- **Krakow**: `andr1pltnhgxkc6na04ezk2pxcwmtk85a99pw957neah7dak7qd29e69st78vj6`
- **Brussels**: `andr1cekwpfunp9wu2qz8mt7pye4a8shw3zwkn0ctdql39dge5e7fgchsr3cnhn`
- **Vienna**: `andr1da7n7smpnxe2ddepmhsd67qrmmul695akhj3dh5r8ewtzmwq46as9dmvd0`
- **Prague**: `andr1fm6nj4xlfr7ug29ww34d6krgvha2arugf6sa6pnj9z0ncfuppz9sglfvs8`
- **Lisbon**: `andr10ccy45ham67yre675tsgmz4ecsjfpft55cfsrhek0w9sp7npheasjntwa9`
- **Porto**: `andr1g42ncu3sw2cchug8rukpgkfly2e4msnrpm3wttan373vjfty6vyqumv24h`
- **Madrid**: `andr1jydn3hraqrm0jjucjtl5pfwyve2c67y6e9waf0tw3vc6wylyyets9s0gvl`
- **Rotterdam**: `andr1anxf5wzpund3vu6g0r80twq70crrxt9xa40sukk8fa2rncgaz7gswhwrcp`
- **Antalya**: `andr16z06wkgp8lv5j39q3rnkdd93ghq5gdcn5v9g5h9nnpmekqjdzclskywyly`
- **Istanbul**: `andr1ye6prf467ywgefqc0q9vrpt06ccr7c243syrt5e794myau23cgdq5lk2v7` 