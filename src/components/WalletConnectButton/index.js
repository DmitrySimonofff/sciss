import React, { useEffect, useState } from "react";
import { useEthers, Mumbai } from "@usedapp/core";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

const WalletConnectButton = () => {
  const { account, activate, deactivate, chainId, switchNetwork } = useEthers();
  const [activateError, setActivateError] = useState("");
  const { error } = useEthers();
  useEffect(() => {
    if (error && account) {
      setActivateError(error.message);
      return;
    }
    setActivateError("");

    if (chainId != Mumbai.chainId) {
      switchNetwork(Mumbai.chainId);
    }
  }, [error, account]);

  const activateProvider = async () => {
    const providerOptions = {
      injected: {
        display: {
          name: "Metamask",
          description: "Connect with the provider in your Browser",
        },
        package: null,
      },
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          bridge: "https://bridge.walletconnect.org",
          infuraId: process.env.INFURA_PROJECT_ID,
        },
      },
      coinbasewallet: {
        package: CoinbaseWalletSDK,
        options: {
          appName: "Rock Paper Scissors",
          infuraId: process.env.INFURA_PROJECT_ID,
          rpc: "",
          chainId: Mumbai.chainId,
          darkMode: false,
        },
      },
    };

    const web3Modal = new Web3Modal({
      providerOptions,
    });
    try {
      const provider = await web3Modal.connect();
      await activate(provider);
      setActivateError("");
    } catch (error) {
      setActivateError(error.message);
    }
  };

  return (
    <div>
      <div>{activateError}</div>
      {account ? (
        <div className="btn btn-primary" onClick={() => deactivate()}>
          Disconnect
        </div>
      ) : (
        <button className="btn btn-primary" onClick={activateProvider}>
          Connect
        </button>
      )}
    </div>
  );
};

export default WalletConnectButton;
