import { Container } from "react-bootstrap";
import "./createNFT.css";
import create from "../../assests/createnft.svg";
import speedo from "../../assests/speedo.jpeg";
import OffCanvasExample from "../Bottompopup/Bottompopup";
import { useState } from "react";

function CreateNFT() {
  const [click, setClick] = useState(false);
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
        <OffCanvasExample></OffCanvasExample>
      </Container>
    </>
  );
}

export default CreateNFT;
