"use client";
import React, { useEffect, useState } from "react";

const ANDROMEDA_RPC = "https://api.andromedaprotocol.io/rpc/testnet";

const WalletNFTList = ({ contractAddress, walletAddress }) => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNFTs() {
      setLoading(true);
      setError(null);
      try {
        const { CosmWasmClient } = await import("@cosmjs/cosmwasm-stargate");
        const axios = (await import("axios")).default;
        const client = await CosmWasmClient.connect(ANDROMEDA_RPC);
        const tokensResponse = await client.queryContractSmart(contractAddress, {
          tokens: { owner: walletAddress },
        });
        const tokenIds = tokensResponse.tokens;
        const nfts = await Promise.all(
          tokenIds.map(async (tokenId) => {
            const nftInfo = await client.queryContractSmart(contractAddress, {
              nft_info: { token_id: tokenId },
            });
            const metaUrl = nftInfo.token_uri;
            let meta = {};
            try {
              console.log("tokenId:", tokenId, "metaUrl:", metaUrl);
              const { data } = await axios.get(metaUrl);
              meta = data;
            } catch (e) {
              meta = { name: tokenId, description: "Metadata alınamadı", image: "" };
            }
            // Sadece ipfs:// için çeviri yap
            const rawImage = meta.image || meta.image_url || meta.img || "";
            let image = rawImage;
            if (rawImage.startsWith("ipfs://")) {
              image = rawImage.replace("ipfs://", "https://ipfs.io/ipfs/");
            }
            // Eğer image sadece bir CID ise, sonuna /<tokenId>.png ekle
            if (
              image.match(/^https?:\/\/(gateway\.pinata\.cloud|ipfs\.io)\/ipfs\/[a-zA-Z0-9]+$/)
            ) {
              image = image + "/" + tokenId + ".png";
            }
            return {
              tokenId,
              ...meta,
              image,
            };
          })
        );
        setNfts(nfts);
      } catch (err) {
        setError("NFT'ler alınırken hata oluştu: " + (err?.message || err));
      } finally {
        setLoading(false);
      }
    }
    if (contractAddress && walletAddress) fetchNFTs();
  }, [contractAddress, walletAddress]);

  if (loading) return <div>NFT'ler yükleniyor...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (nfts.length === 0) return <div>Hiç NFT bulunamadı.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {nfts.map((nft) => {
        console.log(nft.image);
        return (
          <div key={nft.tokenId} className="border rounded shadow p-4 flex flex-col items-center">
            {nft.image && <img src={nft.image} alt={nft.name || nft.tokenId} className="w-full h-48 object-cover rounded mb-2" />}
            <div className="font-bold text-lg">{nft.name || nft.tokenId}</div>
            <div className="text-gray-600 text-sm">{nft.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default WalletNFTList; 