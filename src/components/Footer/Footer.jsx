import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <div className="footer-column">
          <div className="column-name">COINCAP.IO</div>
          <div className="column-items">
            <div className="item">
              <a href="/">Methodology</a>
            </div>
            <div className="item">
              <a href="/">Support</a>
            </div>
            <div className="item">
              <a href="/">Our API</a>
            </div>
            <div className="item">
              <a href="/">Rate Comparison</a>
            </div>
            <div className="item">
              <a href="/">Careers</a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <div className="column-name">LEGALS</div>
          <div className="column-items">
            <div className="item">
              <a href="/">Terms of servie</a>
            </div>
            <div className="item">
              <a href="/">Privacy Policy</a>
            </div>
          </div>
          <div className="column-name mr-top">DISCLAMER</div>
          <div className="disclamer-text">
            <span>
              Neither ShapeShift AG nor CoinCap are in any way associated with
              CoinMarketCap, LLC or any of its goods and services.
            </span>
          </div>
        </div>
        <div className="footer-column">
          <div className="column-name">FOLLOW US</div>
          <a href="/">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={["fas", "twitter"]} />
          </a>
        </div>
        <div className="footer-column">
          <div className="column-name">COINCAP APP AVAILABLE ON</div>
          <div className="store-icons">
            <a href="/">
              <img
                src="https://coincap.io/static/images/stores/google_play.svg"
                alt="googlestore-icon"
              />
            </a>
            <a href="/">
              <img
                src="https://coincap.io/static/images/stores/apple_store.svg"
                alt="applestore-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
