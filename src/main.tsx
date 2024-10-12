/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the App component
import "./index.css"; // Import global styles (if any)

// Create the root element and render the App component
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
