import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import SubSidebar from "../../components/SubSidebar";
import Breadcrumb from "../../components/Breadcrumb";
import InvoiceDashboardComponent from "../../components/InvoiceDashboardComponent";

const InvoiceDashboard = () => {
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
              heading="Invoice Dashboard"
              backLink="/html/index.html"
              syncLink="/assets/icons/Synchronize.svg"
            />

            <div className="scroll-container">
              <InvoiceDashboardComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDashboard;
