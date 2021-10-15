import React from "react";
import { ROOT } from "navigation/CONSTANTS";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <Link to={ROOT}>Home</Link>
      <Typography variant="h2">Page 1</Typography>
    </div>
  );
};