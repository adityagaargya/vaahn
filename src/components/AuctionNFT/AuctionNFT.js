import { useEffect, useState } from "react";
import "./auctionnft.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import auction from "../../assests/listauction.svg";

function AuctionNFT(props) {
  const [tokenId, setTokenId] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const nftContract = props.nftContract;
  const auctionContract = props.auctionContract;
  const [formData, setFormData] = useState({
    minPrice: "",
    minHours: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log("Form", formData);
  };

  const handleSubmit = async (event) => {
    console.log("Hi");
    const minPrice = formData.minPrice;
    const minHours = formData.minHours;

    console.log(tokenId);
    const isApproved = await nftContract.getApproved(tokenId);
    if (isApproved.toLowerCase() === auctionContract.address.toLowerCase()) {
      console.log("Approved", isApproved);
      const createAuction = await auctionContract.createAuction(
        nftContract.address,
        tokenId,
        minPrice,
        minHours
      );
      console.log(createAuction);
    } else {
      const getApproved = await nftContract.approve(
        auctionContract.address,
        tokenId
      );
      const createAuction = await auctionContract.createAuction(
        nftContract.address,
        tokenId,
        minPrice,
        minHours
      );
      console.log(createAuction);
    }
  };
  useEffect(() => {
    console.log("NFT", nftContract);
    const query = new URLSearchParams(window.location.search);
    setTokenId(query.get("tokenId"));

    console.log("Param", query.get("tokenId"));
    const add = auctionContract.address ? auctionContract.address : "";
    console.log("Auction", add);
    const getMetadata = async () => {
      const uri = await nftContract.tokenURI(tokenId);
      const fetchMetadata = await axios.get(uri);
      setMetadata(fetchMetadata.data);
      console.log("Meta", fetchMetadata.data.image);
    };
    getMetadata();
  }, [auctionContract, nftContract]);
  return (
    <>
      <div className="auctionlist-card">
        <Card>
          <Card.Img
            variant="top"
            // src={metadata.image}
            style={{ height: "250px", objectFit: "cover" }}
          />
          {/* <div>{ele.attributes}</div> */}
          <Card.Body>
            <Card.Title>Hi</Card.Title>
            <Card.Text>Helloo</Card.Text>
          </Card.Body>
          <Card.Body>
            {/* <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
          <Form>
            <div className="metadataform child">
              <Form.Group controlId="formBasicName">
                {/* <Form.Label>Name</Form.Label>  */}
                <Form.Control
                  type="number"
                  placeholder="Minimum bid"
                  name="minPrice"
                  value={formData.minPrice}
                  onChange={handleChange}
                  style={{ borderRadius: "10px" }}
                />
              </Form.Group>
            </div>
            <div className="metadataform child">
              <Form.Group controlId="formBasicName">
                {/* <Form.Label>RC Number</Form.Label> */}
                <Form.Control
                  type="number"
                  placeholder="Auction duration"
                  name="minHours"
                  value={formData.minHours}
                  onChange={handleChange}
                  style={{ borderRadius: "10px" }}
                />
              </Form.Group>
              <div className="auction-btn">
                <img
                  onClick={handleSubmit}
                  style={{ display: "block", margin: "auto" }}
                  src={auction}
                ></img>
              </div>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
}

export default AuctionNFT;
