import React, { useState, useEffect, useRef } from "react";
import ScheduleView from "./ScheduleView";
import { useSelector, useDispatch } from "react-redux";
import { scheduleColumnsConfig, parseDescription } from "config";

import ApiCalendar from "react-google-calendar-api";
import { convertLocaleTime } from "config";
import { loadSchedules, getSchedules } from "redux/actions/scheduleAction";

export const ScheduleContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.schedules.loading);
  const error = useSelector((state) => state.schedules.error);
  const schedules = useSelector((state) => state.schedules.schedules);
  const searchCompany = useSelector((state) => state.companies.searchCompany);

  const [googleSignin, setGoogleSignin] = useState();
  const [dateRange, setDateRange] = React.useState([
    new Date(2022, 0, 1).toUTCString(),
    new Date().toUTCString(),
  ]);
  const isComponentMounted = useRef(true);

  useEffect(() => {
    dispatch(getSchedules(searchCompany));
    return () => {
      console.log("unmounted");
    };
  }, [searchCompany, dispatch]);

  useEffect(() => {
    if (isComponentMounted) {
      if (googleSignin && dateRange[0] && dateRange[1]) {
        console.log("mounted again");
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
          maxResults: 200,
          orderBy: "startTime",
        }).then(({ result }) => {
          let tableData = [];
          result.items.forEach((e) => {
            let obj = {};
            obj["creator"] = e.creator.email;
            obj["scheduleId"] = e.id;
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
            obj["summary"] = e.summary;
            obj["organizer"] = e.organizer.email;
            obj["location"] = e.location;
            obj["created"] = convertLocaleTime(e.updated, "Asia/Shanghai");
            tableData.push(obj);
          });
          dispatch(loadSchedules(tableData));
        });
      }
    }
    return () => {
      isComponentMounted.current = false;
    };
  }, [googleSignin, dateRange, dispatch]);

  const connectGCalendar = async () => {
    await ApiCalendar.handleAuthClick();
    setGoogleSignin(ApiCalendar.sign);
  };

  return (
    <ScheduleView
      loading={loading}
      error={error}
      data={schedules}
      columns={scheduleColumnsConfig}
      connectGCalendar={connectGCalendar}
      dateRange={dateRange}
      setDateRange={setDateRange}
    />
  );
};
