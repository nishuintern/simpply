import React from "react";
import { Link } from "react-router";


const SubSidebar = () => {
  
  return (
   <>
   <div id="subSidebar0" className="sub-sidebar d-md-block d-lg-block d-sm-none">
            <span className="ps-3 pt-5 title-text">Order Management</span>
            <hr />
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/html/OrderManagement/OrderDispatch.html"
                  >Order Dispatch</Link
                >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/html/OrderManagement/OrderAck.html"
                  >Order Acknowledgement</Link
                >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/html/OrderManagement/Invoice.html"
                  >Invoice</Link
                >
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/html/OrderManagement/BuyerMapping.html"
                  >Buyer Mapping Discount</Link
                >
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/html/OrderManagement/ItemCatalog.html"
                  >Item Catalog</Link
                >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/html/OrderManagement/Item.html"
                  >Item</Link
                >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/html/OrderManagement/PoStatus.html"
                  >PO Status</Link
                >
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/html/OrderManagement/InvoiceDashboard.html"
                  >Invoice Dashboard</Link
                >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/html/OrderManagement/MyInvoices.html"
                  >My Invoice</Link
                >
              </li>
            </ul>
          </div>
   </>
  );
};

export default SubSidebar;
