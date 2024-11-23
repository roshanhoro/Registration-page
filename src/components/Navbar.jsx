import React, { useState } from "react";
import "./Nav.css";
import { AiTwotoneHome } from "react-icons/ai";
import { PiStudentBold } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { BsFillStopwatchFill } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
// import { a } from "react-router-dom";
// function open() {
//   document.getElementById("main").style.marginLeft = "25%";
//   document.getElementById("mySidebar").style.width = "25%";
//   document.getElementById("mySidebar").style.display = "block";
//   document.getElementById("openNav").style.display = "none";
// }
// function close() {
//   document.getElementById("main").style.marginLeft = "0%";
//   document.getElementById("mySidebar").style.display = "none";
//   document.getElementById("openNav").style.display = "inline-block";
// }

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  function handleMenu() {
    menuActive ? setMenuActive(false) : setMenuActive(true);
  }
  return (
    <>
      <div onClick={handleMenu}>
        <FiMenu className={menuActive ? "no-dis" : ""} />
      </div>
      {menuActive && (
        <div className="nav">
          <div className="sidebar">
            <button class="btn" onClick={handleMenu}>
              ☰
            </button>
          </div>
          <div>
            <a href="/Home">
              <AiTwotoneHome />
              Home
            </a>
          </div>
          <div>
            <a href="/StudentReg1">
              <PiStudentBold /> Student1
            </a>
          </div>
          <div>
            <a href="/StudentReg2">
              <PiStudentFill /> Student2
            </a>
          </div>
          <div>
            <a href="/Products">
              <MdOutlineProductionQuantityLimits /> Products
            </a>
          </div>
          <div>
            <a href="/Stopwatch">
              <BsFillStopwatchFill /> Stop watch
            </a>
          </div>
          <div>
            <a href="/Analogwatch">
              <FaRegClock /> watch
            </a>
          </div>

          {/* <Link to="/Home">
          <AiTwotoneHome />
          Home
        </Link>
      </div>
      <div>
        <Link to="/StudentReg1">
          <PiStudentBold /> Student1
        </Link>
      </div>
      <div>
        <Link to="/StudentReg2">
          <PiStudentFill /> Student2
        </Link>
      </div>
      <div>
        <Link to="/Products">
          <MdOutlineProductionQuantityLimits /> Products
        </Link>
      </div>
      <div>
        <Link to="/Stopwatch">
          <BsFillStopwatchFill /> Stopwatch
        </Link> */}
        </div>
      )}
    </>
  );
};

export default Navbar;
