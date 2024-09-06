import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const BRBaseComponent = (
  /**
   * basename = Setup your react application under a specific basename in the Browser URL.
   * Example:- basename="/app" => localhost:3000/app
   *
   */
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{BRBaseComponent}</React.StrictMode>);
