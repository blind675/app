import React from "react";
import ReactDOM from "react-dom/client";
// Importam BrowserRouter.
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Vrem ca intreaga aplicatie sa aiba acces la functionalitatile de rutare, asa ca impachetam componenta App cu componenta Router. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
