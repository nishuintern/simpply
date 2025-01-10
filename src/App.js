import React from "react";
import { Route, Routes } from "react-router";
import { Dashboard } from "@mui/icons-material";
import OrderDispatch from "./pages/OrderManagement/OrderDispatch";
import OrderAck from "./pages/OrderManagement/OrderAck";
import Invoice from "./pages/OrderManagement/Invoice";
import InvoiceDashboard from "./pages/OrderManagement/InvoiceDashboard";
import BuyerMappingDiscount from "./pages/OrderManagement/BuyerMappingDiscount";
import ItemCatalog from "./pages/OrderManagement/ItemCatalog";
import ItemList from "./pages/OrderManagement/ItemList";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/order/dispatch" element={<OrderDispatch />} />
        <Route path="/order/ack" element={<OrderAck />} />
        <Route path="/order/invoice" element={<Invoice />} />
        <Route path="/order/dashboard" element={<InvoiceDashboard />} />
        <Route path="/order/buyer" element={<BuyerMappingDiscount />} />
        <Route path="/order/item-catalog" element={<ItemCatalog />} />
        <Route path="/order/item" element={<ItemList />} />
      </Routes>
    </>
  );
};

export default App;
