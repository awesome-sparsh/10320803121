// components/ProductList.js
import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";
import SortOptions from "./SortOptions";
import Pagination from "./Pagination";
import { Container, Grid, Box } from "@mui/material";

const ProductList = () => {
  const { state } = useContext(ProductContext);
  const { products } = state;

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Calculate the current products to display based on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container>
      <FilterBar className="filter-bar" />
      <SortOptions className="sort-options" />
      <Grid container spacing={2}>
        {currentProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} className="product-card" />
          </Grid>
        ))}
      </Grid>
      <Box mt={4} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(products.length / productsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </Container>
  );
};

export default ProductList;
