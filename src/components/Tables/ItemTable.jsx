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

const ItemTable = () => {
  const rows = Array.from({ length: 10 }, (_, i) => ({
    ItemCode: "Item 1",
    ItemDescription: `Item Description`,
    ItemSpecification: "Item Spec",
    ChapterCode: "02",
    HeadingCode: "02",
    HSNCode: "02020005",
  }));

  return (
    <TableContainer className="table table-responsive" component={Paper}>
      <Table>
        <TableHead className="tableHead">
          <TableRow>
            <TableCell>Item Code</TableCell>
            <TableCell>Item Description</TableCell>
            <TableCell>Item Specification</TableCell>
            <TableCell>Chapter Code</TableCell>
            <TableCell>Heading Code</TableCell>
            <TableCell>HSN Code</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.ItemCode}</TableCell>
              <TableCell sx={{ color: "##3C4059" }}>
                {row.ItemDescription}
              </TableCell>
              <TableCell sx={{ color: "#3C4059" }}>
                {row.ItemSpecification}
              </TableCell>
              <TableCell sx={{ color: "#3C4059" }}>{row.ChapterCode}</TableCell>
              <TableCell sx={{ color: "#3C4059" }}>{row.HeadingCode}</TableCell>
              <TableCell sx={{ color: "#3C4059" }}>{row.HSNCode}</TableCell>
              <TableCell>
                <Button className="btn btn-primary btn-sm border-0 bg-transparent" sx={{color:'#424F9C'}}>Show Image</Button>
                <Button className="btn btn-primary btn-sm ml-2" sx={{color:'#ffff',background:'#027EDC'}}>Map/Edit HSN</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemTable;
