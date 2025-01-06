import React from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";

const FilterBar = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
      <Box>
        <Typography variant="body1">Page Size:</Typography>
        <Select defaultValue={10} sx={{ ml: 1 }}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </Box>
      <Box>
        <Typography variant="body1">Search:</Typography>
        <input type="text" placeholder="Search..." style={{ marginLeft: "8px", padding: "4px" }} />
      </Box>
    </Box>
  );
};

export default FilterBar;
