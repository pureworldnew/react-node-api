import React from "react";
import Heading from "components/Heading";
import { Button, Paper, Box } from "@mui/material";
import CustomTable from "components/CustomTable";

const ScheduleView = ({ loading, error, data, columns, connectGCalendar }) => {
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
        <Paper elevation={3} sx={{ padding: "15px" }}>
          {/* <DateTimePickerComponent
            value={startDateTime}
            handleChange={handleDateTimeChange}
          /> */}
          <Button
            variant="outlined"
            onClick={connectGCalendar}
            sx={{ margin: "5px" }}
          >
            Connect to calendar
          </Button>
          {/* <Button
            variant="outlined"
            onClick={onClickReload}
            sx={{ margin: "5px" }}
          >
            Reload
          </Button> */}
          {/* <Button
            variant="outlined"
            onClick={onClickRemoveAll}
            sx={{ margin: "5px" }}
          >
            Remove All
          </Button> */}
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
