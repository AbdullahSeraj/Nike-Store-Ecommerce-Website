import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import NavProvider from "./context/NavContext";
import CartNavProvider from "./context/CartNavContext";
import CartProvider from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <CartNavProvider>
      <NavProvider>
        <App />
      </NavProvider>
    </CartNavProvider>
  </CartProvider>
);
