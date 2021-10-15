import React from "react";
import { Typography } from "@mui/material";
import { CustomSkeleton } from "components/CustomSkeleton";

export const Schedule = () => {
  return (
    <div>
      <Typography variant="h2">Schedule</Typography>
      <CustomSkeleton />
    </div>
  );
};
