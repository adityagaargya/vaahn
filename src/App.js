import { Container } from "react-bootstrap";
import "./App.css";
import FirstFold from "./components/Firstfold/Firstfold";
import BrandNav from "./components/Navbar/Navbar";
import Secondfold from "./components/Secondfold/Secondfold";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage";
import CreateNFT from "./components/CreateNFT/CreateNFT";
import { useEffect, useState } from "react";
import ViewNFT from "./components/Viewnft/ViewNFT";
import AuctionNFT from "./components/AuctionNFT/AuctionNFT";
import ListedNFT from "./components/ListedNFT/ListedNFT";
import RemoveInProd from "./components/RemoveInProd/RemoveInProd";

function App() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [contract, setContract] = useState(null);
  const [connected, setConnected] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [nftContract, setNftContract] = useState(null);
  const [auctionContract, setAuctionContract] = useState(null);
  const [tokenContract, setTokenContract] = useState(null);
  const [account, setAccount] = useState(0);
  const getNftContract = (data) => {
    setNftContract(data);
    console.log(nftContract);
  };

  const getAuctionContract = (data) => {
    setAuctionContract(data);
    console.log(auctionContract);
  };

  const getTokenContract = (data) => {
    setTokenContract(data);
    console.log(tokenContract);
  };
  const getAccounts = (data) => {
    setAccount(data);
    console.log(account);
  };
  return (
    <div className="App">
      <BrandNav
        setNft={getNftContract}
        setAuction={getAuctionContract}
        setAccount={getAccounts}
        setToken={getTokenContract}
      ></BrandNav>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage></Landingpage>}></Route>
          <Route
            path="/create"
            element={
              <CreateNFT
                nftContract={nftContract}
                account={account}
              ></CreateNFT>
            }
          ></Route>
          <Route
            path="/view"
            element={
              <ViewNFT
                nftContract={nftContract}
                auctionContract={auctionContract}
                account={account}
              ></ViewNFT>
            }
          ></Route>
          <Route
            path="/auction"
            element={
              <AuctionNFT
                nftContract={nftContract}
                auctionContract={auctionContract}
                account={account}
              ></AuctionNFT>
            }
          ></Route>
          <Route
            path="/listednft"
            element={
              <ListedNFT
                nftContract={nftContract}
                auctionContract={auctionContract}
                account={account}
              ></ListedNFT>
            }
          ></Route>
          <Route
            path="/remove"
            element={
              <RemoveInProd
                nftContract={nftContract}
                auctionContract={auctionContract}
                tokenContract={tokenContract}
                account={account}
              ></RemoveInProd>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
