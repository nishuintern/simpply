import React from "react";
import PaginationBar from "./PaginationBar";
import InvoiceDashboardTable from "./Tables/InvoiceDasTable";
import FilterBar from "./FilterBar";

const InvoiceDashboardComponent = () => {
  return (
    <>
      <div className="d-lg-flex d-md-block d-sm-block justify-content-sm-center justify-content-md-center align-items-md-center align-items-sm-center  m-0">
        <div className="dash-border-container cus-ban p-2">
          <div>
            <label className="m-lg-3 m-sm-1" for="fan-year">
              <span>Financial Year</span>
              <select
                className="ms-lg-4 ps-2 pe-2 px-5 py-1"
                name="size"
                id="financial-year"
              >
                <option value="default">Select Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </label>
            <div>
              <div className="d-none" id="search-container">
                <label className="m-lg-3 m-sm-1" for="location">
                  <span>Location</span>
                  <select
                    className="px-4 py-1 ms-1"
                    name="location"
                    id="location"
                  >
                    <option value="default">Select Location</option>
                    <option value="Location1">Location 1</option>
                    <option value="Location2">Location 2</option>
                    <option value="Location3">Location 3</option>
                  </select>
                </label>
              </div>
              <div className="d-none" id="fromDate-container">
                <label
                  for="from-date"
                  className="m-lg-3 m-sm-1 me-2 text-nowrap"
                >
                  <span>From Date</span>
                </label>
                <input
                  type="date"
                  id="from-date"
                  className="ms-lg-1 ps-2 pe-2 px-4 py-1"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="m-lg-3 m-sm-1" for="search">
              <span className="me-4">Search By</span>
              <select
                className="pe-4 ps-4 px-4 py-1"
                name="searchBy"
                id="search-by"
              >
                <option value="default">Select</option>
                <option value="ALL">ALL</option>
                <option value="Location">Location</option>
                <option value="MaterialInTransits">Material In Transits</option>
                <option value="Date">Date</option>
              </select>
            </label>
            <div className="d-none" id="toDate-container">
              <label for="to-date" className="m-lg-3 m-sm-1 text-nowrap">
                <span>To Date</span>
              </label>
              <input
                type="date"
                id="to-date"
                className="ms-lg-5 ps-2 pe-2 px-4 py-1"
              />
            </div>
          </div>
          <div className="button-container d-sm-block d-md-block d-lg-block m-1 p-1">
            <button
              className="btn btn-dark btn-sm me-lg-2 p-2 px-5"
              id="search-btn"
              onclick="()=>handleSearchByChange();"
            >
              Search
            </button>
            <button
              className="btn btn-primary btn-sm me-lg-2 p-2 px-5"
              id="material-transit-btn"
            >
              Material Transist
            </button>
            <button className="btn btn-light btn-sm p-2 px-5" id="history-btn">
              History
            </button>
          </div>
        </div>
      </div>
      <div id="card-container" className="row ms-3 mt-3">
        <div className="content-scroll">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
              <div className="card d-flex justify-content-center">
                <div className="card-body d-flex flex-column align-items-center">
                  <img src="/assets/icons/Vector.svg" alt="" />
                  <h6 className="mt-1 card-title">21</h6>
                  <p className="card-text">My Invoice</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
              <div className="card d-flex justify-content-center">
                <div className="card-body d-flex flex-column align-items-center">
                  <img src="/assets/icons/flat-color-icons_ok (2).svg" alt="" />
                  <h6 className="mt-1 card-title">00</h6>
                  <p className="card-text">Created</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
              <div className="card d-flex justify-content-center">
                <div className="card-body d-flex flex-column align-items-center">
                  <img src="/assets/icons/la_file-invoice.svg" alt="" />
                  <h6 className="mt-1 card-title">18</h6>
                  <p className="card-text">L1 Pending</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
              <div className="card d-flex justify-content-center">
                <div className="card-body d-flex flex-column align-items-center">
                  <img src="/assets/icons/flat-color-icons_ok (3).svg" alt="" />
                  <h6 className="mt-1 card-title">18</h6>
                  <p className="card-text">L1 Pending More than 7 Days</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
              <div className="card d-flex justify-content-center">
                <div className="card-body d-flex flex-column align-items-center">
                  <img src="/assets/icons/flat-color-icons_ok (1).png" alt="" />
                  <h6 className="mt-1 card-title">00</h6>
                  <p className="card-text">L3 Pending</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
              <div className="card d-flex justify-content-center">
                <div className="card-body d-flex flex-column align-items-center">
                  <img src="/assets/icons/la_file-invoice (1).svg" alt="" />
                  <h6 className="mt-1 card-title">01</h6>
                  <p className="card-text">Approved</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
              <div className="card d-flex justify-content-center">
                <div className="card-body d-flex flex-column align-items-center">
                  <img
                    src="/assets/icons/marketeq_rejected-file-2.svg"
                    alt=""
                  />
                  <h6 className="mt-1 card-title">01</h6>
                  <p className="card-text">Rejected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cus-ban"></div>
        <FilterBar />
        <InvoiceDashboardTable />
        <PaginationBar />
      </div>
    </>
  );
};

export default InvoiceDashboardComponent;
