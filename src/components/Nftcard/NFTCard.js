import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./nftcard.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NFTCard(props) {
  const nftContract = props.nftContract;
  const auctionContract = props.auctionContract;
  const account = props.account;
  const [owned, setOwned] = useState([]);
  const [ownedMetaData, setOwnedMetaData] = useState([]);

  useEffect(() => {
    const GetTransferByAddress = async () => {
      const events = await nftContract.filters.Transfer(null, account);
      console.log("Here", events);
      nftContract.queryFilter(events).then(async (result) => {
        for (let i = 0; i < result.length; i++) {
          let tokenId = result[i]["args"][2].toNumber();
          console.log(tokenId);
          let owner = await nftContract.ownerOf(tokenId);
          if (owner.toLowerCase() === account.toLowerCase()) {
            console.log("Inside");
            let uri = await nftContract.tokenURI(tokenId);
            console.log("Uri", uri);
            let metadata = await axios.get(uri);
            let meta = metadata.data;
            meta["tokenId"] = tokenId;
            console.log("Meta", meta);
            setOwnedMetaData((prevMeta) => [...prevMeta, meta]);
            setOwned((prevId) => [...prevId, tokenId]);
          }
        }
      });
    };
    GetTransferByAddress();
  }, [nftContract]);

  return (
    <div style={{ display: "block", margin: "auto", width: "18rem" }}>
      {ownedMetaData.map((ele) => {
        return (
          <Card className="viewcard">
            <Card.Img
              variant="top"
              src={ele.image}
              style={{ height: "250px", objectFit: "cover" }}
            />
            {/* <div>{ele.attributes}</div> */}
            <Card.Body>
              <Card.Title>{ele.name}</Card.Title>
              <Card.Text>{ele.description}</Card.Text>
            </Card.Body>
            <Card.Body>
              {/* <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
            <Link to={`/auction?tokenId=${ele.tokenId}`}>
              <Button>List Token</Button>
            </Link>
          </Card>
        );
      })}
    </div>
  );
}

export default NFTCard;
