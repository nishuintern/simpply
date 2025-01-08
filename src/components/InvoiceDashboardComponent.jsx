import React from "react";
import {
  Box,
  Button,
  Grid2,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import StatusCard from "./StatusCard";
import InvoiceDashboardTable from "./InvoiceDasTable";
import FilterBar from "./FilterBar";
import PaginationBar from "./PaginationBar";

const InvoiceDashboardComponent = () => {
  const statusData = [
    { label: "My Invoice", value: 21, icon: "file" },
    { label: "Created", value: 0, icon: "check" },
    { label: "L1 Pending", value: 18, icon: "pending" },
    { label: "L1 Pending more than 7 Days", value: 18, icon: "alert" },
    { label: "L3 Pending", value: 0, icon: "pending" },
    { label: "Approved", value: 1, icon: "approved" },
    { label: "Rejected", value: 1, icon: "rejected" },
  ];

  return (
    <Box sx={{ flex: 1, padding: "20px", backgroundColor: "#f9f9f9" }}>
      <Box
        sx={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Invoice Dashboard</Typography>
        <Box>
          <Button variant="contained" sx={{ marginRight: "10px" }}>
            Material Transit
          </Button>
          <Button variant="outlined">History</Button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", marginBottom: "20px", gap: "20px" }}>
        <TextField
          label="Financial Year"
          defaultValue="2024"
          variant="outlined"
        />
        <Select label="Search by" defaultValue="">
          <MenuItem value="">Select Bank</MenuItem>
          <MenuItem value="Bank1">Bank 1</MenuItem>
          <MenuItem value="Bank2">Bank 2</MenuItem>
        </Select>
        <Button variant="contained">Search</Button>
      </Box>

      <Grid2 container spacing={2}>
        {statusData.map((status, index) => (
          <Grid2 item xs={6} sm={4} md={3} key={index}>
            <StatusCard
              label={status.label}
              value={status.value}
              icon={status.icon}
            />
          </Grid2>
        ))}
      </Grid2>

      <FilterBar />
      <InvoiceDashboardTable />

      <PaginationBar />
    </Box>
  );
};

export default InvoiceDashboardComponent;
