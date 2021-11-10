import Heading from "components/Heading";
import CustomTable from "components/CustomTable";
import React from "react";

const ScheduleView = ({ loading, error, data, columns }) => {
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
