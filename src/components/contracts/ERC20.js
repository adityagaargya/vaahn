const ethers = require("ethers");

const addressToken = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

const abiToken = [
  "constructor()",
  "event Approval(address indexed owner, address indexed spender, uint256 value)",
  "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
  "event Paused(address account)",
  "event Transfer(address indexed from, address indexed to, uint256 value)",
  "event Unpaused(address account)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function balanceOf(address account) view returns (uint256)",
  "function burn(uint256 amount)",
  "function burnFrom(address account, uint256 amount)",
  "function decimals() view returns (uint8)",
  "function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool)",
  "function increaseAllowance(address spender, uint256 addedValue) returns (bool)",
  "function mint(address to, uint256 amount)",
  "function name() view returns (string)",
  "function owner() view returns (address)",
  "function pause()",
  "function paused() view returns (bool)",
  "function renounceOwnership()",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function transferFrom(address from, address to, uint256 amount) returns (bool)",
  "function transferOwnership(address newOwner)",
  "function unpause()",
];

const providers = new ethers.providers.Web3Provider(window.ethereum);

export const tokenConnect = async () => {
  await providers.send("eth_requestAccounts", []);
  return getTokenContract();
};

export const getTokenContract = async () => {
  const signer = providers.getSigner();
  const contract = new ethers.Contract(addressToken, abiToken, signer);
  return { signer: signer, tokenContract: contract };
};
