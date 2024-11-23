import React from "react";
import "./Stopwatch.css";
import { BsPlayFill, BsFillPauseFill } from "react-icons/bs";
import { GrResume } from "react-icons/gr";
import { RiRestartLine } from "react-icons/ri";
import { BsFillStopFill } from "react-icons/bs";

import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(time + 1, setTime + 1);
      }, 1000);
    } else if (running && time == 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, time]);

  const handleStart = () => {
    setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleResume = () => {
    setRunning(true);
  };

  const handleReset = () => {
    setTime(0);
  };

  const handleStop = () => {
    setRunning(false);
  };

  return (
    <>
      <div className="cap">
        <div className="map">
          <div className="head">
            <h1> STOP WATCH </h1>
          </div>
          <div className="time">{time} .sec</div>
        </div>

        <div className="bton">
          {!running && (
            <button onClick={handleStart}>
              <BsPlayFill />
              Start
            </button>
          )}
          <button onClick={handlePause}>
            <BsFillPauseFill />
            Pause
          </button>
          <button onClick={handleResume}>
            <GrResume />
            Resume
          </button>
          <button onClick={handleReset}>
            <RiRestartLine />
            Reset
          </button>
          <button onClick={handleStop}>
            <BsFillStopFill />
            Stop
          </button>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
