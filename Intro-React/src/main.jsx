import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import "./style/style.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

