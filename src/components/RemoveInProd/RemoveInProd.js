import { useEffect } from "react";
import "./remove.css";

function RemoveInProd(props) {
  const auctionContract = props.auctionContract;
  const nftContract = props.nftContract;
  const account = props.account;
  const tokenContract = props.tokenContract;
  const address1 = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";
  const address2 = "0xdD2FD4581271e230360230F9337D5c0430Bf44C0";
  console.log(account);
  console.log(tokenContract);
  useEffect(() => {
    const mintAndSendTokens = async () => {
      //   const mint = await tokenContract.mint(address2, 800);
      //   console.log("Mint", mint);
      const getBalance = await tokenContract.balanceOf(address2);
      console.log("Balance", getBalance.toNumber());
    };

    mintAndSendTokens();
  }, [auctionContract, nftContract, tokenContract]);
  return (
    <>
      <div className="remove">Hii</div>
    </>
  );
}

export default RemoveInProd;
