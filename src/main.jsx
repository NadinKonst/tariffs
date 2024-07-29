import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card/Card.jsx";
import "./index.scss";
import Text from "./components/Text/Text.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Text />
    <Card />
  </React.StrictMode>
);
