import React from "react";

function AlgoInfo(props) {
  const algo = props.algo.toUpperCase();
  const { btc, atc, wtc, bsc, asc, wsc } = props.complexity;

  return (
    <div className="algoInfo">
      <div className="info">
        <div className="algoName">
          <h1>{algo}</h1>
        </div>
        <span className="timeC"></span>Time Complexity
        <span className="spaceC"></span>Space Complexity
      </div>

      <div className="complexity">
        <div className="timeComplexity">
          <div className="tc best">
            <h3>Best Case</h3>
            <span>{btc}</span>
          </div>
          <div className="tc avg">
            <h3>Average Case</h3>
            <span>{atc}</span>
          </div>
          <div className="tc worst">
            <h3>Worst Case</h3>
            <span>{wtc}</span>
          </div>
        </div>
        <div className="spaceComplexity">
          <div className="sc best">
            <h3>Best Case</h3>
            <span>{bsc}</span>
          </div>
          <div className="sc avg">
            <h3>Average Case</h3>
            <span>{asc}</span>
          </div>
          <div className="sc worst">
            <h3>Worst Case</h3>
            <span>{wsc}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlgoInfo;
