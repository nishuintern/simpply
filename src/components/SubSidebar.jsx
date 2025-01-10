import React from "react";
import { NavLink } from "react-router";


const SubSidebar = () => {
  return (
  <>
  <div id="subSidebar0" className="sub-sidebar d-md-block d-lg-block d-sm-block">
            <span className="ps-3 pt-5 title-text">Order Management</span>
            <hr />
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/order/dispatch"
                  >Order Dispatch</NavLink
                >
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/order/ack"
                  >Order Acknowledgement</NavLink
                >
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/order/invoice"
                  >Invoice</NavLink
                >
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/order/buyer"
                  >Buyer Mapping Discount</NavLink
                >
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/order/item-catalog"
                  >Item Catalog</NavLink
                >
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/order/item"
                  >Item</NavLink
                >
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/order/po-status"
                  >PO Status</NavLink
                >
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/order/dashboard"
                  >Invoice Dashboard</NavLink
                >
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/order/my-invoices"
                  >My Invoice</NavLink
                >
              </li>
            </ul>
          </div>
  </>
  );
};

export default SubSidebar;
