import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const OrderTable = () => {
  const rows = Array.from({ length: 10 }, (_, i) => ({
    customerName: "Indoasian",
    poNumber: `20240828NPO00000${i + 1}`,
    date: "8/28/2024",
    validity: "8/28/2024",
    amount: 22800.0,
  }));

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell>PO No.</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Validity</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.customerName}</TableCell>
              <TableCell>{row.poNumber}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.validity}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" size="small" sx={{ mr: 1 }}>
                  Download
                </Button>
                <Button variant="contained" color="warning" size="small" sx={{ mr: 1 }}>
                  Dispatch
                </Button>
                <Button variant="contained" color="success" size="small">
                  ASN
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
