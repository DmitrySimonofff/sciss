import { rpsAddress } from "../config";
import { rpsInterface } from "../sdk";
import { useCall } from "@usedapp/core";
import { ethers } from "ethers";

export const useNftWinPercentage = (user) => {
  const { value, error } =
    useCall({
      contract: new ethers.Contract(rpsAddress, rpsInterface),
      method: "s_nftWinPercentage",
      args: [user],
    }) ?? {};
  if (error) {
    console.log(error.message);
    return undefined;
  }
  return value?.[0];
};
