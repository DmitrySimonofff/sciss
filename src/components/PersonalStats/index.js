import React from "react";
import { useEthers, useEtherBalance, shortenAddress } from "@usedapp/core";
import polygon from "../../images/polygon.svg";
import { ethers } from "ethers";
import {
  useNftWinPercentage,
  useGamesPlayed,
  useGamesWon,
  useNftWon,
} from "../../hooks";

const PersonalStats = () => {
  const { account } = useEthers();
  const userAccount = account ? account : ethers.constants.AddressZero;
  const etherBalance = useEtherBalance(account);
  const nftWinPercentage = useNftWinPercentage(userAccount);
  const gamesPlayed = useGamesPlayed(userAccount);
  const formattedGamesPlayed = gamesPlayed ? gamesPlayed.toString() : 0;
  const nftWon = useNftWon(userAccount);
  const formattedNftWon = nftWon ? nftWon.toString() : 0;
  const gamesWon = useGamesWon(userAccount);
  const formattedGamesWon = gamesWon ? gamesWon.toString() : 0;

  const userBalance = etherBalance ? etherBalance : 0;

  console.log(userBalance);

  return (
    <div className="d-flex justify-content-center">
      <h6 className="mx-2 my-2">Account: {shortenAddress(userAccount)}</h6>
      <h6 className="mx-2 my-2">
        Balance: {ethers.utils.formatEther(userBalance)}
      </h6>
      <h6 className="mx-2 my-2">
        NFT Win Percentage: {nftWinPercentage / 1000} %
      </h6>
      <h6 className="mx-2 my-2">Games Played: {formattedGamesPlayed}</h6>
      <h6 className="mx-2 my-2">Games Won: {formattedGamesWon}</h6>
      <h6 className="mx-2 my-2">Nft Won: {formattedNftWon}</h6>
    </div>
  );
};

export default PersonalStats;
