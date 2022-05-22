import React from "react";
import reactDom from "react-dom/client";
import App from "./app";
import Store from "./utils/Store";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/css/global.css";

const root = reactDom.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Store>
      <App />
    </Store>
  </Router>
);
