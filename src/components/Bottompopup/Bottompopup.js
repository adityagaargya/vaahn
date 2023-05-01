import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Form } from "react-bootstrap";
import "./bottompopup.css";
import axios from "axios";
import Metadataform from "../Metadataform/Metadataform";
import SuccessAnimation from "actually-accessible-react-success-animation";
import { Link } from "react-router-dom";
import create from "../../assests/createnft.svg";
import cancel from "../../assests/delete.png";
import blank from "../../assests/blank.svg";
import submit from "../../assests/submit.svg";
import viewnft from "../../assests/viewnft.svg";

const jwt =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2OTYwOTU4NS01ZmUwLTRiOTUtYjE0ZC1mNDUxNTNlMGQ2NDciLCJlbWFpbCI6ImJsdWViYXJiYXJpYW4xQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiY2ZhMGFkOTg2MmEzZWM2MGQ0NiIsInNjb3BlZEtleVNlY3JldCI6ImFiNmUzZWMyM2ViZTU1MzIwNDU3ODgzMzJiNjE4OTA0YzA4NTMxZTEyZTNmM2IzZTQzYzZiY2RhOTdmMTQ4NjEiLCJpYXQiOjE2ODEwNjM4ODh9.stW-hDtLf17fqCXJGXDCi8ChsgHyb8v1dEEQzauCf80";
function Bottompopup(props) {
  const nftContract = props.nftContract;
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [IPFS, setIPFS] = useState(false);
  const [ipfsHash, setIpfsHash] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [mintStatus, setMintStatus] = useState(false);

  const getMintStatus = (data) => {
    setMintStatus(data);
  };

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setFileUrl(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
  };

  const handleSubmission = async () => {
    const formData = new FormData();

    formData.append("file", selectedFile);

    const metadata = JSON.stringify({
      name: selectedFile.name,
    });
    formData.append("pinataMetadata", metadata);

    const options = JSON.stringify({
      cidVersion: 0,
    });
    formData.append("pinataOptions", options);

    try {
      const res = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          maxBodyLength: "Infinity",
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            Authorization: jwt,
          },
        }
      );
      setIPFS(true);
      setIpfsHash(res.data["IpfsHash"]);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = (event) => {
    // Check if the clicked element has a 'data-close-offcanvas' attribute
    if (event.target.getAttribute("data-close-offcanvas")) {
      setShow(false);
    }
  };
  const handleShow = () => setShow(true);

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
              <Container>
                {!IPFS ? (
                  <>
                    <div className="d-flex flex-column align-items-center">
                      <div className="upload">
                        <label
                          htmlFor="file-upload"
                          className="custom-file-upload"
                        >
                          <i className="fas fa-cloud-upload-alt"></i> Upload
                          File
                        </label>
                        <input
                          id="file-upload"
                          type="file"
                          accept="image/*"
                          capture="camera"
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="displaypicture">
                        <img
                          className="picture"
                          height={"100px"}
                          src={fileUrl}
                        ></img>
                      </div>
                      <div>
                        <img src={submit} onClick={handleSubmission}></img>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {IPFS && !mintStatus ? (
                  <>
                    <div className="displaypicture">
                      <img
                        className="picture"
                        height={"100px"}
                        src={fileUrl}
                        style={{ display: "block", margin: "auto" }}
                      ></img>
                    </div>
                    <Metadataform
                      ipfs={ipfsHash}
                      nftContract={props.nftContract}
                      account={props.account}
                      setMintStatus={getMintStatus}
                    ></Metadataform>
                  </>
                ) : (
                  <></>
                )}

                {mintStatus ? (
                  <>
                    {" "}
                    <SuccessAnimation
                      text="NFT Minted Successfully"
                      color="#5cb85c"
                      sliveRegion="live"
                    />
                    <Link>
                      <img src={viewnft}></img>
                    </Link>
                  </>
                ) : (
                  <></>
                )}
              </Container>
            </div>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </>
  );
}

export default Bottompopup;
