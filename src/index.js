import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import Home from "./pages/Home";
import Spiel from "./pages/Spiel";
import HighscoreListe from "./pages/HighscoreListe";
import Navbar from "./Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
