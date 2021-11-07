import React, { useState, useEffect } from "react";
import axios from "axios";
import "./cryptolist.scss";

const LIMIT = 50;

const Cryptolist = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function getCryptoList() {
      setLoading(true);
      try {
        const {
          data: { data },
        } = await axios.get(
          `https://api.coincap.io/v2/assets?limit=${LIMIT}&offset=${offset}`
        );
        setCryptoList((prev) => [...prev, ...data]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    getCryptoList();
  }, [offset]);

  const fetchMore = () => setOffset((prevOffset) => prevOffset + LIMIT);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const convertToUSD = (labelValue) => {
    return Math.abs(Number(labelValue)) >= 1.0e12
      ? (Math.abs(Number(labelValue)) / 1.0e12).toFixed(2) + "t"
      : // Nine Zeroes for Billions
      Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "b"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "m"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "k"
      : Math.abs(Number(labelValue));
  };

  return (
    <div className="list-container">
      <div className="crypto-list">
        <div className="list-header">
          <div className="header-item w-10">Rank</div>
          <div className="header-item text-left w-20">Name</div>
          <div className="header-item text-right w-10">Price</div>
          <div className="header-item text-right w-10">Market Cap</div>
          <div className="header-item text-right w-10">VWAP(24Hr)</div>
          <div className="header-item text-right w-10">Supply</div>
          <div className="header-item text-right w-10">Volume(24Hr)</div>
          <div className="header-item text-right w-10">Change(24Hr)</div>
        </div>
        {cryptoList.map(
          ({
            rank,
            name,
            symbol,
            marketCapUsd,
            priceUsd,
            vwap24Hr,
            supply,
            volumeUsd24Hr,
            changePercent24Hr,
          }) => (
            <div className="list-item" key={rank}>
              <div className="header-item w-10">{rank}</div>
              <div className="header-item bitcoin-info w-20">
                <img
                  src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                  alt="crypto-logo"
                />
                <div className="bitcoin-name">
                  <div className="name">{name}</div>
                  <div className="code">{symbol}</div>
                </div>
              </div>
              <div className="header-item text-right w-10">
                {formatter.format(parseFloat(priceUsd))}
              </div>
              <div className="header-item text-right w-10">
                ${convertToUSD(marketCapUsd)}
              </div>
              <div className="header-item text-right w-10">
                {formatter.format(parseFloat(vwap24Hr))}
              </div>
              <div className="header-item text-right w-10">
                {convertToUSD(supply)}
              </div>
              <div className="header-item text-right w-10">
                ${convertToUSD(volumeUsd24Hr)}
              </div>
              <div
                className="header-item text-right w-10"
                style={{
                  color:
                    parseFloat(changePercent24Hr) > 0
                      ? "rgb(24, 198, 131)"
                      : "rgb(244, 67, 54)",
                }}
              >
                {parseFloat(changePercent24Hr).toFixed(2)}%
              </div>
            </div>
          )
        )}
      </div>
      <div className="divider"></div>
      <button className="view-more-btn" onClick={fetchMore}>
        {loading ? "Loading..." : "View More"}
      </button>
    </div>
  );
};

export default Cryptolist;
