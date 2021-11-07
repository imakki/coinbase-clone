import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navigation.scss";
import { faCog, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="links">
        <a href="/">
          <div className="link-item item-padding">Coins</div>
        </a>
        <a href="/">
          <div className="link-item item-padding">Exchanges</div>
        </a>
        <a href="/">
          <div className="link-item item-padding">Swaps</div>
        </a>
      </div>
      <a href="/" className="logo-container item-padding">
        <img src="https://coincap.io/static/logos/black.svg" alt="logo" />
      </a>
      <div className="menu links">
        <div className="item-padding menu-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="item-padding menu-icon">
          <FontAwesomeIcon icon={faCog} />
        </div>
        <div className="item-padding">
          <button className="connect-wallet-btn">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
