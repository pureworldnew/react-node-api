import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import CustomSkeleton from "components/CustomSkeleton";

const CustomTable = ({ loading, error, data, columns }) => {
  if (loading) {
    return <CustomSkeleton />;
  }

  if (error) {
    return <div style={{ color: "red" }}>ERROR: {error}</div>;
  }
  // if (!data.length) {
  //   return <div style={{ color: "red" }}>No Result</div>;
  // }

  return (
    <DataGrid
      rows={data}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
      disableSelectionOnClick
    />
  );
};

export default CustomTable;
