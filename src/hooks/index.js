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

export const useGamesPlayed = (user) => {
  const { value, error } =
    useCall({
      contract: new ethers.Contract(rpsAddress, rpsInterface),
      method: "s_gamesPlayed",
      args: [user],
    }) ?? {};
  if (error) {
    console.log(error.message);
    return undefined;
  }
  return value?.[0];
};

export const useGamesWon = (user) => {
  const { value, error } =
    useCall({
      contract: new ethers.Contract(rpsAddress, rpsInterface),
      method: "s_gamesWon",
      args: [user],
    }) ?? {};
  if (error) {
    console.log(error.message);
    return undefined;
  }
  return value?.[0];
};

export const useNftWon = (user) => {
  const { value, error } =
    useCall({
      contract: new ethers.Contract(rpsAddress, rpsInterface),
      method: "s_nftWon",
      args: [user],
    }) ?? {};
  if (error) {
    console.log(error.message);
    return undefined;
  }
  return value?.[0];
};
