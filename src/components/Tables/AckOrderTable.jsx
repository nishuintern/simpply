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

const AckOrderTable = () => {
  const rows = Array.from({ length: 10 }, (_, i) => ({
    customerName: "Indoasian",
    poNumber: `20240828NPO00000${i + 1}`,
    date: "8/28/2024",
    validity: "8/28/2024",
    amount: 22800.0,
  }));

  return (
    <TableContainer className="table table-responsive" component={Paper}>
      <Table >
        <TableHead className="tableHead">
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell>Order No.</TableCell>
            <TableCell>PO Date</TableCell>
            <TableCell>Validity</TableCell>
            <TableCell>Order Amount</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.customerName}</TableCell>
              <TableCell sx={{color:'#424F9C'}}>{row.poNumber}</TableCell>
              <TableCell sx={{color:'#424F9C'}}>{row.date}</TableCell>
              <TableCell sx={{color:'#424F9C'}}>{row.validity}</TableCell>
              <TableCell sx={{color:'#424F9C'}}>{row.amount}</TableCell>
              <TableCell>
                <Button variant="contained"  size="small" sx={{ mr: 1,backgroundColo:'#027EDC' }}>
                  Download
                </Button>
                <Button variant="contained" size="small" sx={{ mr: 1,backgroundColor:'#3D9B3E' }}>
                  <img src="/assets/icons/flat-color-icons_ok.svg" alt="" />
                </Button>
                <Button variant="contained" size="small" sx={{backgroundColor:'#027EDC'}}>
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AckOrderTable;
