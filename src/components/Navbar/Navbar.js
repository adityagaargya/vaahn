import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import search from "../../assests/search.svg";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import hamburgery from "../../assests/hamburger.svg";
import test from "../../assests/test.svg";
import close from "../../assests/close.svg";
import "./navbar.css";

function BrandNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar variant="dark" className="navtop">
        <Container>
          <Navbar.Brand href="/">Vaahn</Navbar.Brand>
          <div className="navs">
            <Nav>
              <div className="search-icon">
                <img src={search}></img>
              </div>
            </Nav>
            <Nav>
              <div onClick={handleShow}>
                <img src={hamburgery}></img>
              </div>
            </Nav>
          </div>
        </Container>
        <Offcanvas show={show} onHide={handleClose} responsive="lg">
          <div className="hamburger-view">
            <Offcanvas.Header>
              <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
              <div className="close">
                <img src={close} onClick={handleClose}></img>
              </div>

              {/* <button onClick={handleClose}>click</button> */}
            </Offcanvas.Header>

            <Offcanvas.Body>
              <p className="mb-0">
                This is content within an <code>.offcanvas-lg</code>.
              </p>
            </Offcanvas.Body>
          </div>
        </Offcanvas>
      </Navbar>
    </>
  );
}

export default BrandNav;
