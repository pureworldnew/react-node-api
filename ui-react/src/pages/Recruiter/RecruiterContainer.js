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

  const [dateRange, setDateRange] = useState([
    new Date().toUTCString(),
    new Date().toUTCString(),
  ]);

  useEffect(() => {
    dispatch(getRecruiters());
    return () => {};
  }, [dispatch]);

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

  const onClickReload = () => {
    if (dateRange[0] && dateRange[1]) {
      dispatch(
        loadRecruiters({ minDateTime: dateRange[0], maxDateTime: dateRange[1] })
      );
    }
  };

  const onClickRemoveAll = () => {
    dispatch(removeAllRecruiters("All"));
  };

  return (
    <RecruiterView
      loading={loading}
      error={error}
      data={mapRecruiters}
      dateRange={dateRange}
      columns={recruiterColumnsConfig}
      onClickReload={onClickReload}
      setDateRange={setDateRange}
      onClickRemoveAll={onClickRemoveAll}
    />
  );
};
