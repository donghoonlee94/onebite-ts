import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Null 타입을 반환할 수도 있는데, createdRoot는 null 타입을 받지 않음.
// non null ! or as HTMLElement로 해결 가능.
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
