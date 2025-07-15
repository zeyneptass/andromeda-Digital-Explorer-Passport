"use client";
import React from "react";
import WalletNFTList from "../components/nft/WalletNFTList";

export default function Home() {
  // Kendi contract ve wallet adresini gir
  const contractAddress = "andr1fqz0lp9a0snwydw3j8tsj0sw96st0d34c9z7k78cx5cxdhyx4wdqt7uaa8";
  const walletAddress = "andr1y0z7x68j39p5ygfe60q4v3a8y4lzky7lkm9phf";

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Cüzdanınızdaki NFT&apos;ler</h1>
      <WalletNFTList contractAddress={contractAddress} walletAddress={walletAddress} />
    </div>
  );
}