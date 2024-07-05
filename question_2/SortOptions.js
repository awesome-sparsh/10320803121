// components/SortOptions.js
import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SortOptions = () => {
  return (
    <Box display="flex" justifyContent="flex-end" mb={2}>
      <FormControl>
        <InputLabel>Sort By</InputLabel>
        <Select>
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
          <MenuItem value="discount">Discount</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortOptions;
