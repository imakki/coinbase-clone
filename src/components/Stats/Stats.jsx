import React from "react";
import "./stats.scss";

const statsData = [
  {
    label: "MARKET CAP",
    value: "$2.90T",
  },
  {
    label: "EXCHANGE VOL",
    value: "$120.65B",
  },
  {
    label: "ASSETS",
    value: "2,288",
  },
  {
    label: "EXCHANGES",
    value: "73",
  },
  {
    label: "MARKETS",
    value: "18,355",
  },
  {
    label: "BTC DOM INDEX",
    value: "40.4%",
  },
];

const Stats = () => {
  return (
    <div className="stats">
      {statsData.map(({ label, value }, i) => (
        <div className="stat-container" key={i}>
          <div className="stat">
            <div className="stat-label">{label}</div>
            <div className="stat-value">{value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
