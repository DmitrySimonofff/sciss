import React from "react";
import WalletConnectButton from "../WalletConnectButton";
import { FaDiscord } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Rock Paper Scissors</a>
          <div class="d-flex" role="search">
            <WalletConnectButton />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
