import { ethers } from "ethers";
import cryptoHandsAbi from "./abi/contracts/CryptoHands.sol/CryptoHands.json";
import rpsAbi from "./abi/contracts/RockPaperScissors.sol/RockPaperScissors.json";

export const cryptoHandsInterface = new ethers.utils.Interface(cryptoHandsAbi);
export const rpsInterface = new ethers.utils.Interface(rpsAbi);
