import { Link } from "react-router";
import React from "react";
const Header = () => {
  return (
    <>
    <header
        className='d-flex justify-content-lg-end justify-content-md-between justify-content-sm-between p-2 col-sm-12 col-md-12'
      >
        <div className="d-lg-none d-md-flex d-sm-flex justify-content-md-between justify-content-sm-between align-items-center">
          <img src="/assets/icons/newton icon copy 1.svg" alt="Company" />
          <span className="fs-3 m-2 text-white">Simpplify</span>
          <button
            className="bg-transparent border-0 m-1 pointer-event"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-controls="offcanvasResponsive"
          >
            <img src="/assets/icons/menu.svg" alt="" />
          </button>
        </div>
        <nav className='d-flex align-items-center'>
          <div classNameName="dropdown me-sm-1 me-md-1 mt-sm-3 mt-md-3 mt-lg-5">
            {/* <button
              classNameName="btn-togg-drop dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="lang-text">Language</span>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">English</Link></li>
                <li><Link className="dropdown-item" to="#">Hindi</Link></li>
              </ul>
            </button> */}
            <select name="lang" id="lang" className="lang-text border-0 text-white px-2" style={{backgroundColor:'#141D38'}}>
              <option value="English" >English</option>
              <option value="Hindi">Hindi</option>
            </select>
            <div className="alert alert-info d-none d-lg-none">
              Resize your browser to show the responsive offcanvas toggle.
            </div>

            <div
            className="offcanvas offcanvas-lg offcanvas-start d-lg-none"
            tabindex="-1"
            id="offcanvasResponsive"
            aria-labelledby="offcanvasResponsiveLabel"
          >
            <div className="offcanvas-header">
              <img src="/assets/icons/newton icon copy 1.svg" alt="" />
              <h5 className="offcanvas-title m-2" id="offcanvasResponsiveLabel">
                Simpplify
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasResponsive"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="list-unstyled w-100 gap-5">
                <li className="m-4">
                  <Link
                    className="text-decoration-none text-white"
                    to="/html/index.html"
                    >Dashboard</Link
                  >
                </li>
                <li className="m-4">
                  <select id="customDropdown"
                    className="bg-transparent border-0 text-white bg-option"
                    onchange="location = this.value;"
                  >
                    <option value="Order Management">Order Management</option>
                    <option
                      value="/html/OrderManagement/OrderDispatch.html"
                    >
                      Order Dispatch
                    </option>
                    <option value="/html/OrderManagement/orderAck.html">
                      Order Acknowledgement
                    </option>
                    <option value="/html/OrderManagement/Invoice.html">
                      Invoice
                    </option>
                    <option value="/html/OrderManagement/BuyerMapping.html">
                      Buyer Mapping
                    </option>
                    <option value="/html/OrderManagement/ItemCatalog.html">
                      Item Catalog
                    </option>
                    <option value="/html/OrderManagement/Item.html">
                      Item
                    </option>
                    <option value="/html/OrderManagement/POStatus.html">
                      PO Status
                    </option>
                    <option
                      value="/html/OrderManagement/InvoiceDashboard.html"
                    >
                      Invoice Dashboard
                    </option>
                    <option value="/html/OrderManagement/MyInvoices.html">
                      My Invoices
                    </option>
                  </select>
                </li>
                <li className="m-4">
                  <Link
                    className="text-decoration-none text-white"
                    to="/html/Quotation/QuotationDetails.html"
                    >QuotationDetails</Link
                  >
                </li>
                <li className="m-4">
                  <Link
                    className="text-decoration-none text-white"
                    to="/html/ReverseAuction/ReverseAuction.html"
                    >Reverse Auction</Link
                  >
                </li>
                <li className="m-4">
                  <Link
                    className="text-decoration-none text-white"
                    to="/html/LinkuctionEngine/LinkuctionEngine.html"
                    >Auction Engine</Link
                  >
                </li>
                <li className="m-4">
                  <Link
                    className="text-decoration-none text-white"
                    to="/html/RFP/RFP.html"
                    >Request For Proposal</Link
                  >
                </li>
                <li className="m-4">
                  <Link
                    className="text-decoration-none text-white"
                    to="/html/TaskManager/TaskManager.html"
                    >Task Manager</Link
                  >
                </li>
                <li className="m-4">
                  <select id="customDropdown"
                  className="bg-transparent border-0 text-white bg-option"
                  onchange="location = this.value;"
                >
                <option value="setting">Setting</option>
                  <option
                    value="/html/setting/UserTenantMapping.html"
                  >
                    UserTenantMapping
                  </option>
                  <option value="/html/setting/UserMaster.html">
                    UserMaster
                  </option>
                  <option value="/html/OrderManagement/MenuMapping.html">
                    MenuMapping
                  </option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
          </div>

          <Link to="#help">
            <div className="user-dropdown">
              <button className="user-dropdown-btn">
                <span>
                  <img src="/assets/icons/help.svg" alt="Customer" />
                </span>
              </button>
              <div className="user-dropdown-content">
                <Link className="submenu" to="#help">HelpLine</Link>
              </div>
            </div>
          </Link>
          <Link to="#notification">
            <div className="user-dropdown">
              <button className="user-dropdown-btn">
                <span>
                  <img src="/assets/icons/Doorbell.svg" alt="Customer" />
                </span>
              </button>
              <div className="user-dropdown-content">
                <Link className="submenu" to="#help">Notificatuon 1</Link>
              </div>
            </div>
          </Link>
          <Link to="">
            <div className="user-dropdown">
              <button className="user-dropdown-btn">
                <span>
                  <img src="/assets/icons/Customer.svg" alt="Customer" />
                </span>
              </button>
              <div className="user-dropdown-content">
                <Link
                  className="submenu"
                  to="/html/Dashboard/User/PartyProfile.html"
                  >My Profile</Link>
                <Link
                  className="submenu"
                  to="/html/Dashboard/User/UserAlertMapping.html"
                  >User Alert Mapping</Link>
                <Link
                  className="submenu"
                  to="/html/Dashboard/User/LinklertConfig.html"
                  >Alert Configuration</Link>
                <Link
                  className="submenu"
                  to="/html/Dashboard/User/SchedularConfig.html"
                  >Scheduler Configuration </Link>
                <Link className="submenu" to="/html/loginForm/Login.html">Logout</Link>
              </div>
            </div>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
