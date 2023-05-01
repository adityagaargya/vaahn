import { Container } from "react-bootstrap";
import NFTCard from "../Nftcard/NFTCard";
import KitchenSinkExample from "../Nftcard/NFTCard";

function ViewNFT(props) {
  const nftContract = props.nftContract;
  const auctionContract = props.auctionContract;
  const account = props.account;
  return (
    <>
      <Container>
        <NFTCard
          nftContract={nftContract}
          auctionContract={auctionContract}
          account={account}
        ></NFTCard>
      </Container>
    </>
  );
}

export default ViewNFT;
