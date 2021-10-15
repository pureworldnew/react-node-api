import React from "react";
import { Typography } from "@mui/material";
import { CollapsibleTable } from "components/CollapsibleTable";
import { CustomTablePagination } from "components/CustomTablePagination";

export const Technical = () => {
  return (
    <div>
      <Typography variant="h2">Technical</Typography>
      <CollapsibleTable />
      <CustomTablePagination />
    </div>
  );
};
