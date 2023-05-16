import { Container } from "react-bootstrap";
import "./nftinfo.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function NFTInfo() {
  const [selected, setSelected] = useState(null);

  function handleClick(index) {
    setSelected(index);
  }

  return (
    <div>
      <Container>
        <div className="info-bar">
          <Container>
            <Row>
              <Col
                className={
                  selected === 0
                    ? "d-flex justify-content-center selected"
                    : "d-flex justify-content-center"
                }
                onClick={() => handleClick(0)}
              >
                <div className="numeric">
                  <div className="">
                    <span style={{ color: "grey" }}>Overview</span>
                  </div>
                </div>
              </Col>
              <Col
                className={
                  selected === 1
                    ? "d-flex justify-content-center selected"
                    : "d-flex justify-content-center"
                }
                onClick={() => handleClick(1)}
              >
                <div className="numeric">
                  <div>
                    <span style={{ color: "grey" }}>Properties</span>
                  </div>
                </div>
              </Col>

              <Col
                className={
                  selected === 2
                    ? "d-flex justify-content-center selected"
                    : "d-flex justify-content-center"
                }
                onClick={() => handleClick(2)}
              >
                <div className="numeric">
                  <div>
                    <span style={{ color: "grey" }}>Bids</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {selected === 1 ? <>HElloo</> : <>VHalloo</>}
      </Container>
    </div>
  );
}

export default NFTInfo;
