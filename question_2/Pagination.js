// components/Pagination.js
import React from "react";
import { Box, Pagination as MuiPagination } from "@mui/material";

const Pagination = () => {
  return (
    <Box>
      <MuiPagination count={10} color="primary" />
    </Box>
  );
};

export default Pagination;
