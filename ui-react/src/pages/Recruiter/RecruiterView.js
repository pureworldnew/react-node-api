import React from "react";
import Heading from "components/Heading";
import { Button, Paper, Box } from "@mui/material";
import CustomTable from "components/CustomTable";
import CustomDateRangePicker from "components/CustomDateRangePicker";

const RecruiterView = ({
  loading,
  error,
  data,
  columns,
  onClickReload,
  dateRange,
  setDateRange,
  onClickRemoveAll,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: 800,
        width: "100%",
      }}
    >
      <Heading>Recruiters By Calendly</Heading>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <Paper
          elevation={3}
          sx={{ display: "flex", flexDirection: "row", padding: "15px" }}
        >
          <CustomDateRangePicker value={dateRange} setValue={setDateRange} />
          <Button
            variant="outlined"
            onClick={onClickReload}
            sx={{ margin: "5px" }}
          >
            Reload
          </Button>
          <Button
            variant="outlined"
            onClick={onClickRemoveAll}
            sx={{ margin: "5px" }}
          >
            Remove All
          </Button>
        </Paper>
      </Box>

      <CustomTable
        loading={loading}
        error={error}
        data={data}
        columns={columns}
      />
    </div>
  );
};

export default RecruiterView;
