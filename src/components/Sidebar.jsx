// import React from "react";
// import { Drawer, List, ListItem, ListItemText, Toolbar, Box } from "@mui/material";
// import { Divider } from "@mui/material";
// import {
//   Dashboard,
//   ShoppingCart,
//   Settings,
//   Receipt,
//   List as ListIcon,
// } from "@mui/icons-material";

// const Sidebar = () => {
//   const menuItems = [
//     { text: "Dashboard", icon: <Dashboard /> },
//     { text: "Order Management", icon: <Receipt /> },
//     { text: "Quotation Details", icon: <ShoppingCart /> },
//     { text: "Reverse Auction", icon: <ListIcon /> },
//     { text: "Auction Engine", icon: <ListIcon /> },
//     { text: "Request For Proposal", icon: <ListIcon /> },
//     { text: "Task Manager", icon: <ListIcon /> },
//     { text: "Setting", icon: <Settings /> },
//   ];

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: 240,
//         flexShrink: 1,
//         "& .MuiDrawer-paper": {
//           width: 240,
//           boxSizing: "border-box",
//           backgroundColor: "#0c1d4d",
//           color: "white",
//         },
//       }}
//     >
//       <Toolbar />
//       <Box sx={{ overflow: "auto" }}>
//         <List>
//           {menuItems.map((item, index) => (
//             <ListItem button key={index}>
//               <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
//                 {item.icon}
//                 <ListItemText
//                   primary={item.text}
//                   sx={{ ml: 2, fontSize: "14px" }}
//                   primaryTypographyProps={{ fontSize: "14px" }}
//                 />
//               </Box>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//       </Box>
//     </Drawer>
//   );
// };

// export default Sidebar;

import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Box,
} from "@mui/material";
import { Dashboard, Settings } from "@mui/icons-material";

const Sidebar = ({ onMenuClick }) => {
  const menuItems = [
    { text: "Order Management", icon: <Dashboard /> },
    { text: "Settings", icon: <Settings /> },
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
          backgroundColor: "#0c1d4d",
          color: "white",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={() => onMenuClick(item.text)}>
              <Box
                sx={{ display: "flex", alignItems: "center", color: "white" }}
              >
                {item.icon}
                <ListItemText
                  primary={item.text}
                  sx={{ ml: 2 }}
                  primaryTypographyProps={{ fontSize: "14px" }}
                />
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
