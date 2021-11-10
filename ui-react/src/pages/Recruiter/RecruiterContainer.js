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

export const RecruiterContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.recruiters.loading);
  const error = useSelector((state) => state.recruiters.error);
  const recruiters = useSelector((state) => state.recruiters.recruiters);

  const [startDateTime, setStartDateTime] = useState(new Date().toUTCString());

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

  useEffect(() => {
    dispatch(getRecruiters());
    return () => {};
  }, [dispatch]);

  const handleDateTimeChange = (newValue) => {
    console.log(newValue);
    setStartDateTime(newValue);
  };

  const onClickReload = () => {
    dispatch(loadRecruiters({ startDateTime: startDateTime }));
  };

  const onClickRemoveAll = () => {
    dispatch(removeAllRecruiters("All"));
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
    />
  );
};
