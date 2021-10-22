import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const CompanyTable = ({ loading, error, data, columns }) => {
  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>ERROR: {error}</div>;
  }
  return (
    <DataGrid
      rows={data}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
  );
};

export default CompanyTable;
