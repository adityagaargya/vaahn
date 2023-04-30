const ethers = require("ethers");

const addressNft = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

const abiNft = [
  "constructor()",
  "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
  "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
  "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
  "event Paused(address account)",
  "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
  "event Unpaused(address account)",
  "function approve(address to, uint256 tokenId)",
  "function balanceOf(address owner) view returns (uint256)",
  "function burn(uint256 tokenId)",
  "function getApproved(uint256 tokenId) view returns (address)",
  "function isApprovedForAll(address owner, address operator) view returns (bool)",
  "function name() view returns (string)",
  "function owner() view returns (address)",
  "function ownerOf(uint256 tokenId) view returns (address)",
  "function pause()",
  "function paused() view returns (bool)",
  "function renounceOwnership()",
  "function safeMint(address to, string uri)",
  "function safeTransferFrom(address from, address to, uint256 tokenId)",
  "function safeTransferFrom(address from, address to, uint256 tokenId, bytes data)",
  "function setApprovalForAll(address operator, bool approved)",
  "function supportsInterface(bytes4 interfaceId) view returns (bool)",
  "function symbol() view returns (string)",
  "function tokenURI(uint256 tokenId) view returns (string)",
  "function transferFrom(address from, address to, uint256 tokenId)",
  "function transferOwnership(address newOwner)",
  "function unpause()",
];

const providers = new ethers.providers.Web3Provider(window.ethereum);

export const connect = async () => {
  await providers.send("eth_requestAccounts", []);
  return getContract();
};

export const getContract = async () => {
  const signer = providers.getSigner();
  const contract = new ethers.Contract(addressNft, abiNft, signer);
  return { signer: signer, contract: contract };
};

export const fetchNetwork = async () => {
  const network = await providers.getNetwork();
  return network;
};
