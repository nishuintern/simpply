// import React from "react";
// import { Box } from "@mui/material";
// import Sidebar from "./components/Sidebar";
// import FilterBar from "./components/FilterBar";
// import OrderTable from "./components/OrderTable";
// import PaginationBar from "./components/PaginationBar";
// import Header from "./components/Header";
// import SubSidebar from "./components/SubSidebar";

// const App = () => {
//   return (
//     <Box sx={{ display: "flex", height: "100vh"}}>
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
//         <Header />
//         <Box sx={{ display: "flex", flexGrow: 1 }}>
//           <SubSidebar />
//           <Box sx={{ flexGrow: 1, p: 3, overflow: "auto" }}>
//             <FilterBar />
//             <OrderTable />
//             <PaginationBar />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default App;


import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import SubSidebar from "./components/SubSidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  const [showSubSidebar, setShowSubSidebar] = useState(false); // Toggle for the sub-sidebar

  const handleMenuClick = (menuItem) => {
    if (menuItem === "Order Management") {
      setShowSubSidebar(true);
    } else {
      setShowSubSidebar(false);
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Main Sidebar */}
      <Sidebar onMenuClick={handleMenuClick} />

      {/* Sub Sidebar (only visible when required) */}
      {showSubSidebar && <SubSidebar />}

      {/* Main Layout */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <MainContent />
      </Box>
    </Box>
  );
};

export default App;
