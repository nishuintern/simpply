import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumb";

import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
const Dashboard = () => {
  return (
    <>
      <div className="container-order">
        <div>
          <Sidebar/>
        </div>
        <div className="content">
          <Header />
          <div className="sub-container">
            <div>
              <Breadcrumb
                heading="Dashboard"
                backLink="/html/index.html"
                syncLink="/assets/icons/Synchronize.svg"
              />

              <div className="scroll-container">
                <div className="content-grid">
                  {/* Search Section */}
                  <div className="card">
                    <h3>Search PO Number Details</h3>
                    <form>
                      <TextField label="Customer" fullWidth margin="normal" />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <label>Search By:</label>
                        <input type="radio" name="searchBy" value="PO" /> PO
                        Number
                        <input type="radio" name="searchBy" value="Date" /> Date
                      </div>
                      <TextField label="PO Number" fullWidth margin="normal" />
                      <Button variant="contained" color="primary">
                        Search
                      </Button>
                    </form>
                  </div>

                  {/* To Do List */}
                  <div className="card">
                    <h3>To Do List</h3>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Task ID</TableCell>
                            <TableCell>Assign To</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>End Date</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>20180715</TableCell>
                            <TableCell>John Doe</TableCell>
                            <TableCell>07/10/2024</TableCell>
                            <TableCell>07/12/2024</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>

                  {/* Purchase Order Report */}
                  <div className="card">
                    <h3>Purchase Order Report</h3>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Supplier Name</TableCell>
                            <TableCell>All PO</TableCell>
                            <TableCell>New</TableCell>
                            <TableCell>Changed</TableCell>
                            <TableCell>Confirmed</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>Indosol</TableCell>
                            <TableCell>29</TableCell>
                            <TableCell>9</TableCell>
                            <TableCell>10</TableCell>
                            <TableCell>0</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>

                  {/* Invoice Reports */}
                  <div className="card">
                    <h3>Invoice Reports</h3>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>Sent</TableCell>
                            <TableCell>Approved</TableCell>
                            <TableCell>Rejected</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>Indosol</TableCell>
                            <TableCell>45</TableCell>
                            <TableCell>223530</TableCell>
                            <TableCell>0</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>

                  <div className="card">
                    <h3>Task Report</h3>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Task ID</TableCell>
                            <TableCell>Assign By</TableCell>
                            <TableCell>Assign To</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>20180715</TableCell>
                            <TableCell>3G Technology</TableCell>
                            <TableCell>John Doe</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
