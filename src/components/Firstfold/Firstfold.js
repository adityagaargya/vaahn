import { Container } from "react-bootstrap";
import "./firstfold.css";
import createnft from "../../assests/createnft.svg";
import explore from "../../assests/test.svg";
import FirstCarousel from "./FirstCarousel";
import { Link } from "react-router-dom";
function FirstFold() {
  return (
    <>
      <Container>
        <div className="firstfoldcard">
          <div className="tagline">
            Own a Piece of Automotive History with Our NFT Collection
          </div>
          <div className="tag2">
            Create and Mint Your Own Unique Vehicle NFTs
          </div>
          <div className="clickables">
            <div className="createnft-btn">
              <Link to="/create">
                <img src={createnft}></img>
              </Link>
            </div>
            <div className="explore-btn">
              <img src={explore}></img>
            </div>
          </div>
          <FirstCarousel></FirstCarousel>
        </div>
      </Container>
    </>
  );
}

export default FirstFold;
