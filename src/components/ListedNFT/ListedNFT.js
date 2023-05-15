import { Container } from "react-bootstrap";
import filler from "../../assests/test.jpeg";
import placebid from "../../assests/placebid.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./listednft.css";
function ListedNFT() {
  return (
    <>
      <Container>
        <div>
          <img
            src={filler}
            className="nftholder"
            style={{ objectFit: "cover" }}
          ></img>
          <div className="nftinfo">
            <Container>
              <div className="nftclass">MutantApeYachtClub</div>
              <div className="nftname">MutantApeYachtClub</div>
              <div className="nftId">#1</div>
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
                          <div className="nftowneraddress">0x122sds1</div>
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
                <div className="vhnprice">13.22 VHN </div>
                <div className="rupeeprice">₹ 300 </div>
              </Container>
            </div>
            <Container>
              <div className="d-flex justify-content-center lastsale">
                Last sale price 9.95 VHN
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
      </Container>
    </>
  );
}

export default ListedNFT;
