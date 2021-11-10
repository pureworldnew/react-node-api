import React, { useEffect, useState } from "react";
import RecruiterView from "./RecruiterView";
import { useSelector, useDispatch } from "react-redux";
import {
  getRecruiters,
  loadRecruiters,
  removeAllRecruiters,
} from "redux/actions/recruiterAction";
import { recruiterColumnsConfig } from "config";
import { convertLocaleTime } from "config";
import ApiCalendar from "react-google-calendar-api";

export const RecruiterContainer = () => {
  const [startDateTime, setStartDateTime] = useState(new Date().toUTCString());

  const [googleSignin, setGoogleSignin] = useState(false);

  const handleDateTimeChange = (newValue) => {
    setStartDateTime(newValue);
  };
  const dispatch = useDispatch();

  const recruiters = useSelector((state) => state.recruiters.recruiters);
  let mapRecruiters = [];
  if (recruiters) {
    mapRecruiters = recruiters.map((e) => {
      return {
        ...e,
        startTime: convertLocaleTime(e.startTime, "America/Chicago"),
        startTimeLocal: convertLocaleTime(e.startTime, "Asia/Shanghai"),
        createdTime: convertLocaleTime(e.createdTime, "America/Chicago"),
      };
    });
  }

  const loading = useSelector((state) => state.recruiters.loading);
  const error = useSelector((state) => state.recruiters.error);

  useEffect(() => {
    dispatch(getRecruiters());
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    if (ApiCalendar.sign) {
      let minDate = new Date();
      minDate.setDate(minDate.getDate() - 7);
      let min = new Date(minDate).toISOString();
      let maxDate = new Date();
      maxDate.setDate(maxDate.getDate() + 7);
      let max = new Date(maxDate).toISOString();
      ApiCalendar.listEvents({
        timeMin: min,
        timeMax: max,
        showDeleted: false,
        singleEvents: true,
        maxResults: 20,
        orderBy: "startTime",
      }).then(({ result }) => {
        console.log(result.items);
      });
    }
    return () => {};
  }, []);

  const onClickReload = () => {
    dispatch(loadRecruiters({ startDateTime: startDateTime }));
  };

  const onClickRemoveAll = () => {
    dispatch(removeAllRecruiters("All"));
  };

  const onClickAddNew = async () => {
    await ApiCalendar.handleAuthClick();
    setGoogleSignin(ApiCalendar.sign);

    console.log("google signin", googleSignin);
  };
  return (
    <RecruiterView
      loading={loading}
      error={error}
      data={mapRecruiters}
      startDateTime={startDateTime}
      columns={recruiterColumnsConfig}
      onClickReload={onClickReload}
      handleDateTimeChange={handleDateTimeChange}
      onClickRemoveAll={onClickRemoveAll}
      onClickAddNew={onClickAddNew}
    />
  );
};
