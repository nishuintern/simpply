import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import SubSidebar from "../../components/SubSidebar";
import Breadcrumb from "../../components/Breadcrumb";
import ItemCard from "../../components/ItemCard";

const ItemCatalog = () => {
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
            <Breadcrumb
            heading="Item Catalog"
            backLink="/html/index.html"
            syncLink="/assets/icons/Synchronize.svg"
            />
            <div className="scroll-container">
            <ItemCard />
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default ItemCatalog;
