import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./context/productContext.jsx";
import SidebarProvider from "./context/sidebarContext.jsx";
import CartProvider from "./context/cartContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <SidebarProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </SidebarProvider>
  </CartProvider>
);
