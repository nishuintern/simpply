import React from "react";
import Sidebar from "./components/Sidebar";
import FilterBar from "./components/FilterBar";
import OrderTable from "./components/OrderTable";
import PaginationBar from "./components/PaginationBar";
import Header from "./components/Header";
import SubSidebar from "./components/SubSidebar";
import { Link } from "react-router";

const App = () => {
  return (
    <div className="container-order">
      <div>
        <Sidebar />
      </div>
      <div className="content">
        <Header />
        <div className="sub-container">
          <SubSidebar />

          <div>
            <div class="dashboard-heading">
              <div class="d-flex">
                <Link to="/html/index.html">
                  <img src="../assets/icons/Arrow back ios (2).svg" alt="" />
                </Link>
                <h3>Order Dispatch</h3>
              </div>
              <Link href="">
                <img src="../assets/icons/Synchronize.svg" alt="" />
              </Link>
            </div>
            <div className="scroll-container">
              <FilterBar />
              <OrderTable />
              <PaginationBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
