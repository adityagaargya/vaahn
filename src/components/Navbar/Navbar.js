import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import search from "../../assests/search.svg";
import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import hamburgery from "../../assests/hamburger.svg";
import test from "../../assests/test.svg";
import close from "../../assests/close.svg";
import metamask from "../../assests/metamask.svg";
import "./navbar.css";
import { connect, fetchNetwork, getContract } from "../contracts/ERC721";
import { Auctionconnect, getAuctionContract } from "../contracts/Auction";

function BrandNav(props) {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [contract, setContract] = useState(null);
  const [auctionContract, setAuctionContract] = useState(null);
  const [connected, setConnected] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [account, setAccount] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        props.setAccount(accounts[0]);
        handleInit();
      } else {
        setConnected(false);
      }
    });
  }, []);

  const handleInit = async () => {
    getContract().then(({ contract, signer }) => {
      setContract(contract);
      props.setNft(contract);
    });
    getAuctionContract().then(({ auctionContract, signer }) => {
      setAuctionContract(auctionContract);
      props.setAuction(auctionContract);
    });
  };

  const connectCallBack = async () => {
    const network = await fetchNetwork();
    if (network.name != "unknown") {
      alert("Please connect to matic");
    } else {
      const { contract } = await connect();
      const { auctionContract } = await Auctionconnect();
      setContract(contract);
      setAuctionContract(auctionContract);
      props.setNft(contract);
      props.setAuction(auctionContract);

      if (contract && auctionContract) {
        setConnected(true);
      }
    }
  };

  useEffect(() => {
    connected ? console.log("true") : console.log("False");
  });
  return (
    <>
      <Navbar variant="dark" className="navtop">
        <Container>
          <Navbar.Brand href="/">Vaahn</Navbar.Brand>
          <div className="navs">
            <Nav>
              <div className="search-icon">
                <img src={search}></img>
              </div>
            </Nav>
            <Nav>
              <div onClick={handleShow}>
                <img src={hamburgery}></img>
              </div>
            </Nav>
          </div>
        </Container>
        <Offcanvas show={show} onHide={handleClose} responsive="lg">
          <div className="hamburger-view">
            <Offcanvas.Header>
              <Offcanvas.Title>
                {!connected ? (
                  <img src={metamask} onClick={connectCallBack}></img>
                ) : (
                  ""
                )}
              </Offcanvas.Title>
              <div className="close">
                <img src={close} onClick={handleClose}></img>
              </div>

              {/* <button onClick={handleClose}>click</button> */}
            </Offcanvas.Header>

            <Offcanvas.Body>
              <p className="mb-0">
                This is content within an <code>.offcanvas-lg</code>.
              </p>
            </Offcanvas.Body>
          </div>
        </Offcanvas>
      </Navbar>
    </>
  );
}

export default BrandNav;
