// import React from "react";
// import { Drawer, Toolbar, List, ListItem, ListItemText, Typography } from "@mui/material";

// const SubSidebar = () => {
//   const menuItems = [
//     "Order Dispatch",
//     "Order Acknowledgement",
//     "Invoice",
//     "Buyer Mapping Discount",
//     "Item Catalog",
//     "PO Status",
//     "Invoice Dashboard",
//     "My Invoices",
//   ];

//   return (
//     <Drawer variant="permanent" sx={{ width: 240, "& .MuiDrawer-paper": { width: 240 } }}>
//       <Toolbar />
//       <List>
//         <ListItem>
//           <Typography variant="h6">Order Management</Typography>
//         </ListItem>
//         {menuItems.map((item, index) => (
//           <ListItem button key={index}>
//             <ListItemText primary={item} />
//           </ListItem>
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// export default SubSidebar;

import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Box,
} from "@mui/material";

const SubSidebar = () => {
  const subMenuItems = [
    "Order Dispatch",
    "Order Acknowledgement",
    "Invoice",
    "Buyer Mapping Discount",
    "Item Catalog",
    "PO Status",
    "Invoice Dashboard",
    "My Invoices",
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#f4f5f8",
          color: "#0c1d4d",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {subMenuItems.map((item, index) => (
            <ListItem button key={index}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{ fontSize: "14px" }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SubSidebar;
