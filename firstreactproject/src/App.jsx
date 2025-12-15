import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio"
import Contact from "./Components/Contact/Contact"

let route = createBrowserRouter([
  {
     
    path: "/StartFrameWork",
    
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {path: "About", element: <About/>},
      {path: "Portfolio", element: <Portfolio/>},
      {path: "Contact", element: <Contact/>},
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
