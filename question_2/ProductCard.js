// components/ProductCard.js
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  Button,
} from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`https://source.unsplash.com/random/300x200?product-${product.id}`}
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
        <Button variant="contained" color="primary" fullWidth>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
