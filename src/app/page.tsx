"use client"; // <--- BU SATIRI EKLEYİN

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NFTGrid from "../components/nft/NFTGrid";
import ConnectWalletButton from "../components/web3/ConnectWalletButton";
import WalletInfo from "../components/web3/WalletInfo";
import TransactionModal from "../components/web3/TransactionModal";
import ARViewer from "../components/feature/ARViewer";
import CheckInButton from "../components/feature/CheckInButton";
import React from "react"; // useState'i kullanmak için React'i import etmelisiniz

export default function Home() {
  // Demo amaçlı örnek veri ve state
  const nfts = [
    { id: 1, image: "/file.svg", title: "Ayasofya", description: "Tarihi cami ve müze.", visited: true },
    { id: 2, image: "/file.svg", title: "Topkapı Sarayı", description: "Osmanlı sarayı.", visited: false },
  ];
  const wallet = { address: "cosmos1...", balance: 42 };
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalStatus, setModalStatus] = React.useState("pending");

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col gap-8 items-center justify-center p-8">
        <div className="w-full max-w-2xl flex flex-col gap-6">
          <ConnectWalletButton onConnect={() => { setModalOpen(true); setModalStatus("pending"); }} />
          <WalletInfo address={wallet.address} balance={wallet.balance} />
          <CheckInButton onCheckIn={() => { setModalOpen(true); setModalStatus("success"); }} />
          <ARViewer />
          <NFTGrid nfts={nfts} />
        </div>
        <TransactionModal open={modalOpen} status={modalStatus} onClose={() => setModalOpen(false)} />
      </main>
      <Footer />
    </div>
  );
}