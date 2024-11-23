import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import StudentReg1 from "./StudentReg1";
import StudentReg2 from "./StudentReg2";
import Navbar from "./components/Navbar";
import Products from "./components/Pages/Products/Products";
import Productdetailes from "./components/Pages/Products/Productdetailes";
import Stopwatch from "./components/Pages/Stopwatch/Stopwatch";
import Analogwatch from "./components/Pages/Analogwatch/Analog";
import "./NavRoute.css";

function Navigation() {
  var route = createBrowserRouter([
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/StudentReg1",
      element: <StudentReg1 />,
    },
    {
      path: "/StudentReg2",
      element: <StudentReg2 />,
    },

    {
      path: "/Products",
      element: <Products />,
    },
    {
      path: "/produtDetails",
      element: <Productdetailes />,
    },

    {
      path: "/Stopwatch",
      element: <Stopwatch />,
    },

    {
      path: "/Analogwatch",
      element: <Analogwatch />,
    },
  ]);

  return (
    <>
      <div className="navi">
        <Navbar />
        <RouterProvider router={route} />
      </div>
    </>
  );
}

export default Navigation;
