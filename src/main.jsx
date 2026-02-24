import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Note: CSS is loaded via <link> tags in index.html to preserve exact original ordering.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
