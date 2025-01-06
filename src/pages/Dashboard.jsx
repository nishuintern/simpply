import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const Dashboard = () => {
  return (
    <>
      <div className="">
        {/* <div className="col-2">
            <Sidebar />
        </div>
        <div className="col-10 container flex-fill">
          <Header />
          </div> */}
        <Header />
          <Sidebar />
      </div>
    </>
  );
};

export default Dashboard;
