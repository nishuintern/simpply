import React from "react";
import { Box, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const PaginationBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 2,
      }}
    >
      <Typography>Showing 1 to 10 of 10 entries</Typography>
      <Pagination count={1} color="primary" />
    </Box>
  );
};

export default PaginationBar;
