import React from "react";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar d-sm-none d-md-none d-lg-flex">
        <div className="logo ">
          <div className="logo-container ">
            <img
              src="/assets/icons/newton icon copy 1.svg"
              alt="Company Logo"
            />
            <h3 className="text-white">Simplify</h3>
          </div>
        </div>
        <nav className="mt-5 d-flex align-items-center justify-content-center">
          <ul>
            <li>
              <Link to="/">
                <div className="menu-item">
                  <img
                    src="/assets/icons/iconamoon_home@2x.svg"
                    alt="Dashboard"
                  />
                  <span>Dashboard</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/html/OrderManagement/OrderDispatch.html">
                <div className="menu-item active">
                  <img
                    src="/assets/icons/icon-park-outline_transaction-order.svg"
                    alt="Order Management"
                  />

                  <span>Order Management</span>
                </div>
              </Link>
              <img
                src="/assets/icons/Glyph_ undefined 1.svg"
                alt="Toggle Menu"
                className="toggle-img"
              />
            </li>
            <li>
              <Link to="/html/Quotation/QuotationDetails.html">
                <div className="menu-item">
                  <img src="/assets/icons/Checkout.svg" alt="Quotation" />
                  <span>Quotation Details</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/html/ReverseAuction/ReverseAuction.html">
                <div className="menu-item">
                  <img src="/assets/icons/Sell.svg" alt="Reverse Auction" />
                  <span>Reverse Auction</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/html/LinkuctionEngine/LinkuctionEngine.html">
                <div className="menu-item">
                  <img src="/assets/icons/Service.svg" alt="Auction Engine" />
                  <span>Auction Engine</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/html/RFP/RFP.html">
                <div className="menu-item">
                  <img
                    src="/assets/icons/Invite.svg"
                    alt="Request For Proposal"
                  />
                  <span>Request For Proposal</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/html/TaskManager/TaskManager.html">
                <div className="menu-item">
                  <img src="/assets/icons/Task.svg" alt="Task Manager" />
                  <span>Task Manager</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/html/Setting/UserTenantMapping.html">
                <div className="menu-item">
                  <img src="/assets/icons/uil_setting.png" alt="Setting" />
                  <span>Setting</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
