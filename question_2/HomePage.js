// pages/HomePage.js
import React, { useEffect, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { fetchProducts } from "../api";
import ProductList from "../components/ProductList";

const HomePage = () => {
  const { dispatch } = useContext(ProductContext);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts(
        "companyA",
        "categoryA",
        0,
        1000,
        20
      );
      dispatch({ type: "SET_PRODUCTS", payload: products });
    };

    getProducts();
  }, [dispatch]);

  return <ProductList />;
};

export default HomePage;
