import React from "react";
import { useEthers, useEtherBalance, shortenAddress } from "@usedapp/core";
import polygon from "../../images/polygon.svg";
import { ethers } from "ethers";
import { useNftWinPercentage } from "../../hooks";

const PersonalStats = () => {
  const { account } = useEthers();
  const userAccount = account ? account : ethers.constants.AddressZero;
  const etherBalance = useEtherBalance(account);
  const nftWinPercentage = useNftWinPercentage(userAccount);

  const userBalance = etherBalance ? etherBalance : 0;

  console.log(userBalance);

  return (
    <div className="d-flex justify-content-center">
      <h5 className="mx-2 my-2">Account: {shortenAddress(userAccount)}</h5>
      <h5 className="mx-2 my-2">
        Balance: {ethers.utils.formatEther(userBalance)}
      </h5>
      <h5 className="mx-2 my-2">
        Nft Win Percentage: {nftWinPercentage / 1000} %
      </h5>
    </div>
  );
};

export default PersonalStats;
