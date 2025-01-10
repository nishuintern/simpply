import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const BuyerTable = () => {
  const rows = Array.from({ length: 10 }, (_, i) => ({
    Customer: "Indoasian",
    BankCode: `001${i + 1}`,
    BankName: "HDFC",
  }));

  return (
    <TableContainer className="table table-responsive" component={Paper}>
      <Table>
        <TableHead className="tableHead">
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Bank Code</TableCell>
            <TableCell>Bank Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.Customer}</TableCell>
              <TableCell sx={{ color: "#424F9C" }}>{row.BankCode}</TableCell>
              <TableCell sx={{ color: "#424F9C" }}>{row.BankName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BuyerTable;
