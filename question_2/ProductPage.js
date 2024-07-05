// pages/ProductPage.js
import React from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

const ProductPage = () => {
  const { id } = useParams();

  return <ProductDetails productId={id} />;
};

export default ProductPage;
