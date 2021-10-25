import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import CustomSkeleton from "components/CustomSkeleton";

const CompanyList = ({ loading, error, data, columns, setSelectedRows }) => {
  if (loading) {
    return <CustomSkeleton />;
  }

  if (error) {
    return <div style={{ color: "red" }}>ERROR: {error}</div>;
  }

  const handleRowSelection = (ids) => {
    setSelectedRows(ids);
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
