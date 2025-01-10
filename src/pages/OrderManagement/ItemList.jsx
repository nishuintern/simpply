import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import SubSidebar from "../../components/SubSidebar";
import Breadcrumb from "../../components/Breadcrumb";
import FilterBar from "../../components/FilterBar";
import PaginationBar from "../../components/PaginationBar";
import ItemTable from "../../components/Tables/ItemTable";

const ItemList = () => {
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
                heading="Item List"
                backLink="/html/index.html"
                syncLink="/assets/icons/Synchronize.svg"
              />
              <div className="scroll-container">
                <FilterBar />
                <ItemTable/>
                <PaginationBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
