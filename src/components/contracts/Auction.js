const ethers = require("ethers");

const addressAuction = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

const abiAuction = [
  "constructor(address erc20TokenAddress)",
  "event AuctionCreated(uint256 indexed id, address indexed nft, uint256 indexed nftId, address owner, uint256 minPrice, uint256 endTime, uint256 startedAt)",
  "function auctions(uint256) view returns (uint256 id, address nft, uint256 nftId, uint256 minPrice, uint256 highestBid, address highestBidder, uint256 endTime, uint256 startedAt, address owner, bool isActive)",
  "function bid(uint256 _auctionId, uint256 _amount)",
  "function cancelAuction(uint256 _auctionId)",
  "function cancelBid(uint256 _auctionId)",
  "function createAuction(address _nft, uint256 _nftId, uint256 _minPrice, uint256 _endTime)",
  "function erc20Token() view returns (address)",
  "function getAuction(uint256 _auctionId) view returns (uint256, address, uint256, address, uint256, uint256)",
  "function nextAuctionId() view returns (uint256)",
  "function onERC721Received(address operator, address from, uint256 tokenId, bytes data) view returns (bytes4)",
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
