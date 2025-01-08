import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const StatusCard = ({ label, value, icon }) => {
  return (
    <Card sx={{ textAlign: "center", padding: "20px" }}>
      <CardContent>
        <Typography variant="h5">{value}</Typography>
        <Typography variant="body1">{label}</Typography>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
