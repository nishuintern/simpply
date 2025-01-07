import React from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";

const FilterBar = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
      <Box className='d-flex align-items-center ms-3'>
        <Typography variant="body1">Page Size:</Typography>
        <Select className="px-lg-3 px-md-2 px-sm-1" defaultValue={10} sx={{ ml: 1 }}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </Box>
      <Box className="d-flex align-items-center me-3">
        <Typography variant="body1">Search:</Typography>
        <input type="text" placeholder="Search..." className="px-lg-5 px-md-3 px-sm-2" style={{ marginLeft: "8px", padding: "4px" }} />
      </Box>
    </Box>
  );
};

export default FilterBar;
