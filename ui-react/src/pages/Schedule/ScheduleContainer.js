import React, { useState, useEffect } from "react";
import ScheduleView from "./ScheduleView";
import { useSelector } from "react-redux";
import { scheduleColumnsConfig, parseDescription } from "config";

import ApiCalendar from "react-google-calendar-api";
import { convertLocaleTime } from "config";

export const ScheduleContainer = () => {
  const loading = useSelector((state) => state.schedules.loading);
  const error = useSelector((state) => state.schedules.error);
  const schedules = useSelector((state) => state.schedules.schedules);

  const [googleSignin, setGoogleSignin] = useState(ApiCalendar.sign);
  const [calData, setCalData] = useState([]);
  const [dateRange, setDateRange] = React.useState([
    new Date().toUTCString(),
    new Date().toUTCString(),
  ]);

  useEffect(() => {
    if (googleSignin && dateRange[0] && dateRange[1]) {
      let minDate = new Date(dateRange[0]);
      minDate.setHours(0, 0, 0, 0);
      let min = new Date(minDate).toISOString();
      let maxDate = new Date(dateRange[1]);
      maxDate.setHours(24, 0, 0, 0);
      let max = new Date(maxDate).toISOString();
      ApiCalendar.listEvents({
        timeMin: min,
        timeMax: max,
        showDeleted: false,
        singleEvents: true,
        maxResults: 100,
        orderBy: "startTime",
      }).then(({ result }) => {
        let tableData = [];
        result.items.forEach((e) => {
          let obj = {};
          obj["created"] = convertLocaleTime(e.created, "Asia/Shanghai");
          obj["creator"] = e.creator.email;
          obj["id"] = e.id;
          if (e.description) {
            parseDescription(e.description).forEach((e) => {
              if (e["Company or Client Name"]) {
                obj["companyName"] = e["Company or Client Name"];
              } else if (e["Event Name"]) {
                obj["eventName"] = e["Event Name"];
              } else if (e["Which position is this meeting for?"]) {
                obj["roleName"] = e["Which position is this meeting for?"];
              } else if (e["Role of Interviewer"]) {
                obj["kindOfInterview"] = e["Role of Interviewer"];
              } else if (e["Phone Number"]) {
                obj["phoneNumber"] = e["Phone Number"];
              }
            });
          }
          obj["startDateTime"] = convertLocaleTime(
            e.start.dateTime,
            "America/Chicago"
          );
          obj["startDateTimeLocal"] = convertLocaleTime(
            e.start.dateTime,
            "Asia/Shanghai"
          );
          obj["startDateTimeZone"] = e.start.timeZone;
          obj["summary"] = e.summary;
          obj["organizer"] = e.organizer.email;
          obj["location"] = e.location;
          tableData.push(obj);
        });
        setCalData(tableData);
      });
    }
    return () => {};
  }, [googleSignin, dateRange]);

  const connectGCalendar = async () => {
    await ApiCalendar.handleAuthClick();
    setGoogleSignin(ApiCalendar.sign);
  };

  return (
    <ScheduleView
      loading={loading}
      error={error}
      data={calData}
      columns={scheduleColumnsConfig}
      connectGCalendar={connectGCalendar}
      dateRange={dateRange}
      setDateRange={setDateRange}
    />
  );
};
