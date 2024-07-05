// components/FilterBar.js
import React from "react";
import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@mui/material";

const FilterBar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      <TextField label="Category" select>
        <MenuItem value="categoryA">Category A</MenuItem>
        <MenuItem value="categoryB">Category B</MenuItem>
      </TextField>
      <TextField label="Company" select>
        <MenuItem value="companyA">Company A</MenuItem>
        <MenuItem value="companyB">Company B</MenuItem>
      </TextField>
      <TextField label="Rating" type="number" />
      <TextField label="Price Range" type="number" />
      <FormControl>
        <InputLabel>Availability</InputLabel>
        <Select>
          <MenuItem value="inStock">In Stock</MenuItem>
          <MenuItem value="outOfStock">Out of Stock</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary">
        Apply Filters
      </Button>
    </Box>
  );
};

export default FilterBar;
