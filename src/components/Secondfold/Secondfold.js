import { Container } from "react-bootstrap";
import "./secondfold.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function Secondfold() {
  const [selected, setSelected] = useState(null);

  function handleClick(index) {
    setSelected(index);
  }

  return (
    <div>
      <Container>
        <div className="days-bar">
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
                    <span>1H</span>
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
                    <span>1D</span>
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
                    <span>7D</span>
                  </div>
                </div>
              </Col>

              <Col
                className={
                  selected === 3
                    ? "d-flex justify-content-center selected"
                    : "d-flex justify-content-center"
                }
                onClick={() => handleClick(3)}
              >
                <div className="numeric">
                  <div>
                    <span>30D</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="price-filter">
          <Container>
            <Row>
              <Col className="d-flex justify-content-center">
                <div className="floorprice">Floor price</div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div>
                  <input
                    type="number"
                    className="input-style"
                    placeholder="lowest"
                  ></input>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div>
                  <input
                    type="number"
                    className="input-style"
                    placeholder="highest"
                  ></input>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default Secondfold;
