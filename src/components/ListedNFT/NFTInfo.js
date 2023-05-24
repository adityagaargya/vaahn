import { Container } from "react-bootstrap";
import "./nftinfo.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

function NFTInfo(props) {
  const auctionMetadata = props.auctionMetadata;
  const attrs = auctionMetadata ? auctionMetadata["attributes"] : "";
  const [selected, setSelected] = useState(null);

  function handleClick(index) {
    setSelected(index);
  }

  useEffect(() => {
    console.log("NFT DEETS", attrs);
  }, [auctionMetadata, attrs]);

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
        {selected === 0 ? (
          <>
            {" "}
            <div className="overview">
              <div className="description-header">Description</div>
              <div className="description-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                varius neque nec nunc scelerisque, nec luctus magna bibendum.
                Vestibulum vestibulum semper ex, vitae tincidunt neque dignissim
                id. Suspendisse potenti. Donec sagittis ex id justo interdum, in
                dignissim metus mattis. Sed fermentum tellus eget diam
                ultricies, vitae posuere lectus commodo.{" "}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {selected === 1 ? (
          <>
            <Container>
              {attrs.map((ele) => {
                return (
                  <div key={ele.trait_type} className="properties-card">
                    <Row>
                      <Col>
                        <div className="property-name">{ele.trait_type}</div>
                      </Col>
                      <Col>
                        <div className="property-value">{ele.value}</div>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </Container>
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
}

export default NFTInfo;
