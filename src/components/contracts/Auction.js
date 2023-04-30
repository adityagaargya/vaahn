const ethers = require("ethers");

const addressAuction = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

const abiAuction = [
  "event Bid(address indexed bidder, uint256 indexed listingId, uint256 amount, uint256 timestamp)",
  "event List(address indexed lister, address indexed nft, uint256 indexed nftId, uint256 listingId, uint256 minPrice, uint256 endTime, uint256 timestamp)",
  "function bid(uint256 listingId) payable",
  "function getListing(uint256 listingId) view returns (address, uint256, uint256, uint256, uint256)",
  "function list(address nft, uint256 nftId, uint256 minPrice, uint256 numHours)",
  "function onERC721Received(address operator, address from, uint256 tokenId, bytes data) view returns (bytes4)",
  "function withdrawFunds()",
];

const providers = new ethers.providers.Web3Provider(window.ethereum);

export const Auctionconnect = async () => {
  await providers.send("eth_requestAccounts", []);
  return getAuctionContract();
};

export const getAuctionContract = async () => {
  const signer = providers.getSigner();
  const contract = new ethers.Contract(addressAuction, abiAuction, signer);
  return { signer: signer, auctionContract: contract };
};
