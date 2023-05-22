import { Container } from "react-bootstrap";
import filler from "../../assests/test.svg";
import placebid from "../../assests/placebid.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./listednft.css";
import Secondfold from "../Secondfold/Secondfold";
import NFTInfo from "./NFTInfo";
import { useEffect, useState } from "react";
import axios from "axios";
function ListedNFT(props) {
  const nftContract = props.nftContract;
  const auctionContract = props.auctionContract;
  const [owned, setOwned] = useState([]);
  const [owner, setOwner] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [highestBid, setHighestBid] = useState(null);
  const [highestBidder, setHighestBidder] = useState(null);
  const [auctionId, setAuctionId] = useState(null);
  const [auctionMetaData, setAuctionMetaData] = useState();
  const [tokenId, setTokenId] = useState(null);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setTokenId(query.get("tokenId"));
    const GetTransferByAddress = async () => {
      console.log("NFT", nftContract);
      const events = await nftContract.filters.Transfer(
        null,
        auctionContract.address
      );
      console.log(events);
      let owner;
      try {
        owner = await nftContract.ownerOf(tokenId);
      } catch (err) {
        alert(err);
      }
      // console.log(owner.data);
      if (owner.toLowerCase() === auctionContract.address.toLowerCase()) {
        let uri = await nftContract.tokenURI(tokenId);
        console.log("Uri", uri);
        let metadata = await axios.get(uri);
        let meta = metadata.data;
        meta["tokenId"] = tokenId;
        console.log("Meta", meta);
        setAuctionMetaData(meta);
        setOwned(tokenId);
        const createAuctionEvent = await auctionContract.filters.AuctionCreated(
          null,
          nftContract.address,
          tokenId
        );
        console.log("Events", createAuctionEvent);
        auctionContract.queryFilter(createAuctionEvent).then(async (res) => {
          const activeAuction = res[res.length - 1];
          console.log("Here", res[res.length - 1]);
          console.log("MinPrice", activeAuction["args"]["minPrice"].toNumber());
          setAuctionId(activeAuction["args"]["id"].toNumber());
          setMinPrice(activeAuction["args"]["minPrice"].toNumber());
          setOwner(activeAuction["args"]["owner"]);

          console.log("Auc Id", auctionId);
          if (auctionId != null) {
            const getAuctionDetails = await auctionContract.getAuction(
              auctionId
            );
            console.log("Auc Details", getAuctionDetails);
            setHighestBid(getAuctionDetails[4].toNumber());
            if (getAuctionDetails[5].toNumber() === 0) {
              setHighestBidder(owner);
            } else {
              setHighestBidder(getAuctionDetails[5].toNumber());
            }
            // console.log(owner);
          }
        });
      } else {
        alert("Not in auction");
      }
    };
    GetTransferByAddress();
  }, [nftContract, auctionContract, auctionId]);
  return (
    <>
      <Container>
        <div>
          <img
            src={auctionMetaData ? auctionMetaData.image : filler}
            className="nftholder"
            style={{ objectFit: "cover" }}
          ></img>
          <div className="nftinfo">
            <Container>
              <div className="nftclass">MutantApeYachtClub</div>
              <div className="nftname">MutantApeYachtClub</div>
              <div className="nftId">
                {" "}
                #{auctionMetaData ? auctionMetaData["tokenId"] : ""}
              </div>
            </Container>
          </div>
          <Container className="nftownershipdetails">
            <Row>
              <Col>
                <div>
                  <div className="nftcreator">
                    <Row>
                      <Col>
                        <div className="nftcreatorprofile"></div>
                      </Col>
                      <Col>
                        {" "}
                        <div className="createrinfo">
                          <div style={{ color: "grey" }}>Creator</div>
                          <div className="nftcreatoraddress">0x122sds1</div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <div className="nftowner">
                    <Row>
                      <Col>
                        <div className="nftownerrofile"></div>
                      </Col>
                      <Col>
                        {" "}
                        <div className="ownerinfo">
                          <div style={{ color: "grey" }}>Owner</div>
                          <div className="nftowneraddress">
                            {owner ? owner.substring(0, 5) : ""}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <hr style={{ color: "grey" }}></hr>
          <div className="pricedetails">
            <div className="pricecard">
              <Container>
                <div className="price">Price</div>
                <div className="vhnprice">
                  {highestBid ? highestBid : ""} VHN{" "}
                </div>
                <div className="rupeeprice">₹ 300 </div>
              </Container>
            </div>
            <Container>
              <div className="d-flex justify-content-center lastsale">
                Last sale price {minPrice} VHN
              </div>
            </Container>
            <div className="buynow">
              <Container>
                <div className="d-flex justify-content-center buyprice">
                  Buy now for 130.5 VHN
                </div>
              </Container>
            </div>
            <div className="placebid">
              <img src={placebid}></img>
            </div>
            <div className="saleend">Sale ends in 0d 0f 13h 5h</div>
          </div>
        </div>
        <NFTInfo auctionMetadata={auctionMetaData}></NFTInfo>
      </Container>
    </>
  );
}

export default ListedNFT;
