# ChronoQuest: Your Digital Passport to World Heritage

[![Andromeda Protocol](https://img.shields.io/badge/Powered%20by-Andromeda-9B51E0?style=for-the-badge)](https://www.andromedaprotocol.io/)
[![Status: Live on Testnet](https://img.shields.io/badge/Status-Live%20on%20Testnet-green?style=for-the-badge)](https://app.testnet.andromedaprotocol.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**ChronoQuest transforms world travel into a captivating Web3 adventure.** Collect beautifully crafted NFTs of Europe's most iconic landmarks and use them as your digital passport to a world of rewards.

---

## 🌍 The Concept: Explore, Verify, and Be Rewarded

Have you ever stood in front of the Eiffel Tower or wandered through the ancient streets of Rome and wished that moment meant something more? With ChronoQuest, it does.

Our platform offers unique NFT collections for various European cities, starting with Paris, Istanbul, Rome, and many more. Each NFT is a digital representation of a famous monument or artwork, based on original photography. But here's where the magic happens:

**Your NFT is not just a collectible; it's a dynamic travel companion.**

When you physically visit the landmark represented by your NFT, you can "stamp" your digital passport.

### How It Works:
1.  **Collect Your NFT:** Purchase an NFT of a landmark you plan to visit, like the "Louvre Museum" from our Paris collection.
2.  **Travel and Explore:** Make your way to the real-world location of the Louvre in Paris.
3.  **Scan to Verify:** At the location, you will find a special ChronoQuest QR code. Using our web app, you scan this code.
4.  **On-Chain Update:** This scan triggers a secure, on-chain transaction that updates your NFT's metadata. The `Visit Status` attribute of your "Louvre Museum" NFT will permanently change from **"Not Visited"** to **"VISITED"**.

This simple act of verification is the key to unlocking the full potential of the ChronoQuest ecosystem.

## ✨ Key Features

*   **City-Based NFT Collections:** Discover and collect NFTs from a growing list of iconic European cities. Each collection is its own smart contract, ensuring an organized and scalable ecosystem.
*   **Real-World "Proof of Visit":** The core feature of our platform. The QR code check-in system provides undeniable, on-chain proof that you have visited a location.
*   **Gamified Experience:** Stamping your passport by visiting locations will award you **Experience Points (XP)**. As you accumulate XP, your "Digital Passport" levels up, granting you new titles and status within the community.
*   **Unlockable Content:** A "VISITED" status on your NFT can unlock exclusive digital content, such as:
    *   In-depth audio guides about the landmark's history.
    *   Interactive AR filters for your social media.
    *   Behind-the-scenes virtual tours.
*   **Future Utility:** We are building a framework for "VISITED" NFTs to grant access to real-world perks, such as discounts at nearby partner cafes and shops.

## 🏗️ Technical Architecture

ChronoQuest is built on a robust and modular architecture using Andromeda Protocol's App Contracts.

*   **Main App Contract:** A central "hub" contract (`ChronoQuest Passport`) manages all city collections.
    *   **Main App Address (Testnet):** `andr1hpx7y1n9zt3zmaah0vcfazprudnre5krtnck9n3xn9x62zcgpdq9j7vg6`
*   **City Collections:** Each city (Paris, Istanbul, etc.) is a separate `CW721` NFT contract deployed as a component of the main app. This allows for clean separation and infinite scalability.
*   **Decentralized Metadata:** All NFT data, including the image and attributes, is stored permanently on **IPFS**.

## 🚀 Get Started on Testnet

The project is live and functional on the Andromeda Testnet. You can explore our collections and even mint your first NFT today!

1.  **Install Keplr Wallet:** Ensure you have the [Keplr browser extension](https://www.keplr.app/download) and it's set to the "Andromeda Testnet".
2.  **View the Main Project:** Click the link below to go directly to the ChronoQuest main application panel. From here, you can see all the city collections we've launched.
    *   **[Explore ChronoQuest Main App](https://app.testnet.andromedaprotocol.io/assets/view/andr1hpx7y1n9zt3zmaah0vcfazprudnre5krtnck9n3xn9x62zcgpdxq9j7vg6)**
3.  **Mint an NFT:**
    *   From the main app panel, click on a city collection you're interested in (e.g., the one for Paris).
    *   This will take you to that specific collection's page.
    *   Navigate to the **"Mint"** tab and follow the instructions to mint your first digital heritage collectible.

Join us on our quest to connect the digital and physical worlds, one landmark at a time.
