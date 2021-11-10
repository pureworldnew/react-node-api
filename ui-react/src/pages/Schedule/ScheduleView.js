import React from "react";
import Heading from "components/Heading";
import { Button, Paper, Box } from "@mui/material";
import CustomTable from "components/CustomTable";
import CustomDateRangePicker from "components/CustomDateRangePicker";

const ScheduleView = ({
  loading,
  error,
  data,
  columns,
  connectGCalendar,
  dateRange,
  setDateRange,
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
      <Heading>Google Calendar Scheduling Event</Heading>
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
            onClick={connectGCalendar}
            sx={{ margin: "5px" }}
          >
            Connect to calendar
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
export default ScheduleView;
