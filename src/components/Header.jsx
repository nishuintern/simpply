import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Select, MenuItem } from "@mui/material";
import { Notifications, AccountCircle } from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar position="static" color="default" sx={{ boxShadow: "none",backgroundColor: "#141D38" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Order Dispatch
        </Typography>
        <Select value="Language" sx={{ mr: 2 }}>
          <MenuItem value="Language">Language</MenuItem>
          <MenuItem value="English">English</MenuItem>
        </Select>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
