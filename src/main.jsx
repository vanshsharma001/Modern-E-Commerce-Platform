import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {CartProvider} from "./context/CreateContext.jsx" 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>
);
