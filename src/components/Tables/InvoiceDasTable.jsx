import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const InvoiceDashboardTable = () => {
  const rows = []; // Add your data here

  return (
    <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
      <Table>
        <TableHead className="tableHead">
          <TableRow>
            <TableCell>Dispatch ID</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Vendor Name</TableCell>
            <TableCell>Invoice No.</TableCell>
            <TableCell>Invoice Amount</TableCell>
            <TableCell>PO No.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.dispatchId}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.vendorName}</TableCell>
                <TableCell>{row.invoiceNo}</TableCell>
                <TableCell>{row.invoiceAmount}</TableCell>
                <TableCell>{row.poNo}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                No Data To View
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvoiceDashboardTable;
