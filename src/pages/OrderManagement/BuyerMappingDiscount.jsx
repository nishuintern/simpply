import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import SubSidebar from "../../components/SubSidebar";
import Breadcrumb from "../../components/Breadcrumb";
import FilterBar from "../../components/FilterBar";
import PaginationBar from "../../components/PaginationBar";
import BuyerTable from "../../components/Tables/BuyerTable";

const BuyerMappingDiscount = () => {
  return (
    <>
      <div className="container-order">
        <div>
          <Sidebar />
        </div>
        <div classNameName="content">
          <Header />
          <div className="sub-container">
            <SubSidebar />

            <div>
              <Breadcrumb
                heading="Bank For Cash Discount"
                backLink="/html/index.html"
                syncLink="/assets/icons/Synchronize.svg"
              />
              <div className="cus-ban container-filter">
                <div>
                  <label className="m-3" for="page-size">
                    <span>Customer</span>
                    <select className="ms-4 ps-2 pe-2" name="size" id="sizeOfPage">
                      <option value="Customer">Select Customer</option>
                      <option value="Customer">Indoasian</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label className="m-3" for="search">
                    <span className="me-4">Bank</span>
                    <select className="pe-4 ps-4" name="size" id="sizeOfPage">
                      <option value="bank">Select Bank</option>
                      <option value="bank">HDFC</option>
                      <option value="bank">HSFC</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="scroll-container">
                <FilterBar />
                <BuyerTable />
                <PaginationBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerMappingDiscount;
