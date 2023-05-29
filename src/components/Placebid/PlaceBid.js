import "./placebid.css";
import create from "../../assests/createnft.svg";
import { useState } from "react";
import placebid from "../../assests/placebid.svg";
import cancel from "../../assests/delete.png";
import Offcanvas from "react-bootstrap/Offcanvas";

function PlaceBid() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = (event) => {
    // Check if the clicked element has a 'data-close-offcanvas' attribute
    if (event.target.getAttribute("data-close-offcanvas")) {
      setShow(false);
    }
  };

  return (
    <>
      <div className="" onClick={handleShow}>
        <img src={placebid}></img>
      </div>

      <Offcanvas
        show={show}
        // onHide={handleClose}
        responsive="lg"
        placement="bottom"
        style={{ height: "250px" }}
        onHide={() => setShow(false)}
        backdrop="static"
        scrollable={true}
      >
        <div className="bid-popup">
          <Offcanvas.Header>
            {/* <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title> */}
            <div className="close">
              {/* Add a 'data-close-offcanvas' attribute to the button */}
              <img
                src={cancel}
                onClick={handleClose}
                data-close-offcanvas
              ></img>
              Hii
            </div>

            {/* <button onClick={handleClose}>click</button> */}
          </Offcanvas.Header>
        </div>
      </Offcanvas>
    </>
  );
}

export default PlaceBid;
