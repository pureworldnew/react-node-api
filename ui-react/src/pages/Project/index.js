import React from "react";
import { Typography } from "@mui/material";
import { CustomSkeleton } from "components/CustomSkeleton";

export const Project = () => {
  return (
    <div>
      <Typography variant="h2">Project</Typography>
      <CustomSkeleton />
    </div>
  );
};
