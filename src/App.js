import React from "react";
import { Route, Routes } from "react-router";
import { Dashboard } from "@mui/icons-material";
import OrderDispatch from "./pages/OrderManagement/OrderDispatch";
import OrderAck from "./pages/OrderManagement/OrderAck";
import Invoice from "./pages/OrderManagement/Invoice";
import InvoiceDashboard from "./pages/OrderManagement/InvoiceDashboard";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/order/dispatch" element={<OrderDispatch />} />
      <Route path="/order/ack" element={<OrderAck/>}/>
      <Route path='/order/invoice' element={<Invoice/>}/>
      <Route path="/order/dashboard" element={<InvoiceDashboard/>}/>
    </Routes>
    </>
  );
};

export default App;
