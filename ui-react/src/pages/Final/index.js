import React from "react";
import { Typography } from "@mui/material";
import { CustomSkeleton } from "components/CustomSkeleton";

export const Final = () => {
  return (
    <div>
      <Typography variant="h2">Final</Typography>
      <CustomSkeleton />
    </div>
  );
};
