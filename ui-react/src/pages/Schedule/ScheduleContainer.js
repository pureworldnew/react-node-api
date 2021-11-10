import React, { useState, useEffect } from "react";
import ScheduleView from "./ScheduleView";
import { useSelector } from "react-redux";
import { scheduleColumnsConfig } from "config";

import ApiCalendar from "react-google-calendar-api";

export const ScheduleContainer = () => {
  const loading = useSelector((state) => state.schedules.loading);
  const error = useSelector((state) => state.schedules.error);
  const schedules = useSelector((state) => state.schedules.schedules);

  const [googleSignin, setGoogleSignin] = useState(ApiCalendar.sign);
  const [calData, setCalData] = useState([]);

  useEffect(() => {
    if (googleSignin) {
      let minDate = new Date();

      let min = new Date(minDate).toISOString();
      let maxDate = new Date();
      maxDate.setDate(maxDate.getDate() + 1);
      let max = new Date(maxDate).toISOString();
      ApiCalendar.listEvents({
        timeMin: min,
        timeMax: max,
        showDeleted: false,
        singleEvents: true,
        maxResults: 20,
        orderBy: "startTime",
      }).then(({ result }) => {
        let tableData = [];
        result.items.forEach((e) => {
          let obj = {};
          obj["created"] = e.created;
          obj["creator"] = e.creator.email;
          obj["id"] = e.id;
          obj["description"] = e.description;
          obj["startDateTime"] = e.start.dateTime;
          obj["startDateTimeZone"] = e.start.timeZone;
          obj["summary"] = e.summary;
          obj["organizer"] = e.organizer.email;
          obj["location"] = e.location;
          tableData.push(obj);
        });
        console.log(tableData);
        setCalData(tableData);
      });
    }
    return () => {};
  }, [googleSignin]);

  const connectGCalendar = async () => {
    await ApiCalendar.handleAuthClick();
    setGoogleSignin(ApiCalendar.sign);

    console.log("google signin", googleSignin);
  };

  return (
    <ScheduleView
      loading={loading}
      error={error}
      data={calData}
      columns={scheduleColumnsConfig}
      connectGCalendar={connectGCalendar}
    />
  );
};
