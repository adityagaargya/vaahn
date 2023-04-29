import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import create from "../../assests/createnft.svg";
import cancel from "../../assests/delete.png";
import "./bottompopup.css";

function OffCanvasExample(props) {
  const [show, setShow] = useState(false);

  const handleClose = (event) => {
    // Check if the clicked element has a 'data-close-offcanvas' attribute
    if (event.target.getAttribute("data-close-offcanvas")) {
      setShow(false);
    }
  };
  const handleShow = () => setShow(true);
  useEffect(() => {}, [props.click]);

  return (
    <>
      <div className="createnft" onClick={handleShow}>
        <img src={create}></img>
      </div>
      <Offcanvas
        show={show}
        // onHide={handleClose}
        responsive="lg"
        placement="bottom"
        style={{ height: "500px" }}
        onHide={() => setShow(false)}
        backdrop="static"
        scrollable={true}
      >
        <div className="bottom-popup">
          <Offcanvas.Header>
            {/* <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title> */}
            <div className="close">
              {/* Add a 'data-close-offcanvas' attribute to the button */}
              <img
                src={cancel}
                onClick={handleClose}
                data-close-offcanvas
              ></img>
            </div>

            {/* <button onClick={handleClose}>click</button> */}
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div className="bottompopup-body">
              <p className="mb-0">
                This is content within an <code>.offcanvas-lg</code>.
              </p>
              <div className="upload">
                <div>
                  <label className="form-label">Choose File</label>
                  <input type="file" />
                </div>

                <button>Submit</button>
              </div>
            </div>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </>
  );
}

export default OffCanvasExample;
