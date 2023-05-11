import { useEffect, useState } from "react";
import "./auctionnft.css";
function AuctionNFT(props) {
  const [tokenId, setTokenId] = useState(null);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const param1 = query.get("tokenId");
    console.log("Param", param1);
  }, [window.location.search]);
  return (
    <>
      <div className="auctionlist-card">Auction</div>
    </>
  );
}

export default AuctionNFT;
