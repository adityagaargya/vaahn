import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./metadataform.css";
import mint from "../../assests/mint.svg";
const jwt =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2OTYwOTU4NS01ZmUwLTRiOTUtYjE0ZC1mNDUxNTNlMGQ2NDciLCJlbWFpbCI6ImJsdWViYXJiYXJpYW4xQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiY2ZhMGFkOTg2MmEzZWM2MGQ0NiIsInNjb3BlZEtleVNlY3JldCI6ImFiNmUzZWMyM2ViZTU1MzIwNDU3ODgzMzJiNjE4OTA0YzA4NTMxZTEyZTNmM2IzZTQzYzZiY2RhOTdmMTQ4NjEiLCJpYXQiOjE2ODEwNjM4ODh9.stW-hDtLf17fqCXJGXDCi8ChsgHyb8v1dEEQzauCf80";

function Metadataform(props) {
  console.log("From Metadata from", props.nftContract);
  console.log("From Metadata from ipfs", props.ipfs);
  const ipfs = props["ipfs"];
  const contract = props.nftContract;
  const account = props.account;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nftJson = {
      name: "NFT",
      description: "nft market place",
      image: `https://ipfs.io/ipfs/${ipfs}`,
      attributes: [
        {
          trait_type: "Name",
          value: formData.name,
        },
        {
          trait_type: "RC",
          value: formData.rcNumber,
        },
        {
          trait_type: "Color",
          value: formData.color,
        },
        {
          trait_type: "Mileage",
          value: formData.mileage,
          max_value: 150,
        },
        {
          trait_type: "Top Speed",
          value: formData.topSpeed,
          max_value: 500,
        },
      ],
      name: `${formData.name}.json`,
    };
    const res = await axios.post(
      `https://api.pinata.cloud/pinning/pinJSONToIPFS`,
      nftJson,
      {
        maxBodyLength: "Infinity",
        headers: {
          "Content-Type": `application/json`,
          Authorization: jwt,
        },
      }
    );
    console.log("Res", res);
    console.log("Cantract", contract);

    const deployNFT = await contract.safeMint(
      account,
      `https://ipfs.io/ipfs/${res.data["IpfsHash"]}`
    );
    if (deployNFT.data) {
      props.setMintStatus(true);
    }
    console.log(deployNFT.data);
  };
  return (
    <>
      <div className="metadataform">
        <Form>
          <div className="metadataname child">
            <Form.Group controlId="formBasicName">
              {/* <Form.Label>Name</Form.Label>  */}
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
          </div>
          <div className="metadatarcnumber child">
            <Form.Group controlId="formBasicName">
              {/* <Form.Label>RC Number</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Enter RC number"
                name="rcNumber"
                value={formData.rcNumber}
                onChange={handleChange}
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
          </div>
          <div className="metadatacolor child">
            <Form.Group controlId="formBasicName">
              {/* <Form.Label>Color</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
          </div>
          <div className="metadatamileage child">
            <Form.Group controlId="formBasicName">
              {/* <Form.Label>Mileage</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Mileage"
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
          </div>
          <div className="metadatatopspeed child">
            <Form.Group controlId="formBasicName">
              {/* <Form.Label>Top Speed</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Top Speed"
                name="topSpeed"
                value={formData.topSpeed}
                onChange={handleChange}
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
          </div>

          <img
            onClick={handleSubmit}
            style={{ display: "block", margin: "auto" }}
            src={mint}
          ></img>
        </Form>
      </div>
    </>
  );
}

export default Metadataform;
