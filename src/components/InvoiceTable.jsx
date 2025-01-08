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

const InvoiceTable = () => {
  const rows = Array.from({ length: 10 }, (_, i) => ({
    InvoiceNo: `1011020${i+1}`,
    DispatchNo: `0123${i + 1}`,
  }));

  return (
    <TableContainer className="table table-responsive" component={Paper}>
      <Table>
        <TableHead className="tableHead">
          <TableRow>
            <TableCell>Invoice No</TableCell>
            <TableCell>Dispatch No.</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.InvoiceNo}</TableCell>
              <TableCell sx={{ color: "#424F9C" }}>{row.DispatchNo}</TableCell>
              <TableCell sx={{ color: "#424F9C" }}>
                <Button sx={{ border: "none", background: "transparent",color: "#424F9C"  }}>
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

export default InvoiceTable;
