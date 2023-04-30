import { Container } from "react-bootstrap";
import "./createNFT.css";
import create from "../../assests/createnft.svg";
import speedo from "../../assests/speedo.jpeg";
import OffCanvasExample from "../Bottompopup/Bottompopup";
import { useState } from "react";
import Bottompopup from "../Bottompopup/Bottompopup";

function CreateNFT(props) {
  const [click, setClick] = useState(false);
  console.log("Create NFT Auction from props", props.nftContract);
  return (
    <>
      <Container>
        <div className="firsttag">
          Get behind the wheel of unique vehicle NFTs you can truly call your
          own
        </div>
        <img src={speedo} height="200px"></img>

        <div className="secondtag">
          Vaahn token: Fueling the Indian vehicles NFT marketplace for creators
          and collectors alike
        </div>
        <Bottompopup
          nftContract={props.nftContract}
          account={props.account}
        ></Bottompopup>
      </Container>
    </>
  );
}

export default CreateNFT;
