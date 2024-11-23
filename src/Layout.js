import React from "react";
import ReactDom from "react-dom/client";
import "./Layout.css";
import Home from "./Home";
import { useState } from "react";
import StudentReg1 from "./StudentReg1";
import StudentReg2 from "./StudentReg2";
import LearnCSS from "./LearnCSS";
import { create } from "lodash";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

function Layout() {
  const [activePage, setActivePage] = useState("Home");
  var route = createBrowserRouter(
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/StudentReg1",
      element: <StudentReg2 />,
    },
    {
      path: "/StudentReg2",
      element: <StudentReg2 />,
    },
    {
      path: "/LearnCss",
      element: <LearnCSS />,
    }
  );

  return (
    <div className="main-container">
      <div className="header">
        <h1> Learning js</h1>
      </div>

      <div className="section">
        <div className="sideNav">
          <Link to="/Home"> Home </Link>
          <Link to="/StudentReg1"> StunentReg1 </Link>
          <Link to="/StudentReg2"> StudentReg2 </Link>
          <Link to="/LearnCss"> LearnCss </Link>

          {/* <div
            className={activePage === "Home" ? "nav active" : "nav"}
            onClick={() => setActivePage("Home")}
          >
            Home
          </div>
          <div
            className={activePage === "StudentReg1" ? "nav active" : "nav"}
            onClick={() => setActivePage("StudentReg1")}
          >
            StudentReg1
          </div>
          <div
            className={activePage === "StudentReg2" ? "nav active" : "nav"}
            onClick={() => setActivePage("StudentReg2")}
          >
            StudentReg2
          </div>
          <div
            className={activePage === "LearnCss" ? "nav active" : "nav"}
            onClick={() => setActivePage("LearnCss")}
          >
            LearnCss
          </div> */}
        </div>
        <div className="content">
          {/* {activePage === "Home" && <Home />}
          {activePage === "StudentReg1" && <StudentReg1 />}
          {activePage === "StudentReg2" && <StudentReg2 />}
          {activePage === "LearnCss" && <LearnCSS />} */}

          <RouterProvider router={route} />
        </div>
      </div>
    </div>
  );
}
export default Layout;
