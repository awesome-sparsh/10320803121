// components/ProductDetails.js
import React, { useEffect, useState } from "react";
import { fetchProductDetails } from "../api"; // Implement this function
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      const productDetails = await fetchProductDetails(id);
      setProduct(productDetails);
    };

    getProductDetails();
  }, [id]);

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={`https://source.unsplash.com/random/600x400?product-${product.id}`}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.company} - {product.category}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Typography variant="h6">${product.price}</Typography>
            <Rating name="read-only" value={product.rating} readOnly />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Typography
              variant="body2"
              color={product.availability ? "success.main" : "error.main"}
            >
              {product.availability ? "In Stock" : "Out of Stock"}
            </Typography>
            {product.discount && (
              <Typography variant="body2" color="secondary">
                {product.discount}% off
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetails;
