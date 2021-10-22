import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const CompanyList = ({ loading, error, data, columns, setDeletedRows }) => {
  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>ERROR: {error}</div>;
  }

  const handleRowSelection = (ids) => {
    setDeletedRows(ids);
  };
  return (
    <DataGrid
      rows={data}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
      disableSelectionOnClick
      onSelectionModelChange={handleRowSelection}
    />
  );
};

export default CompanyList;
