// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <ProductProvider>
      <CssBaseline />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
