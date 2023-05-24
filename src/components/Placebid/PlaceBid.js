import "./placebid.css";
import create from "../../assests/createnft.svg";
import { useState } from "react";
import placebid from "../../assests/placebid.svg";

function PlaceBid() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <div className="" onClick={handleShow}>
        <img src={placebid}></img>
      </div>
    </>
  );
}

export default PlaceBid;
