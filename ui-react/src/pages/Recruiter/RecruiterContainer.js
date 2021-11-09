import React, { useEffect } from "react";
import RecruiterView from "./RecruiterView";
import { useSelector, useDispatch } from "react-redux";
import {
  getRecruiters,
  loadRecruiters,
  removeAllRecruiters,
} from "redux/actions/recruiterAction";
import { recruiterColumnsConfig } from "config";

export const RecruiterContainer = () => {
  const [startDateTime, setStartDateTime] = React.useState(new Date());

  const handleDateTimeChange = (newValue) => {
    setStartDateTime(newValue);
  };
  const dispatch = useDispatch();

  const recruiters = useSelector((state) => state.recruiters.recruiters);

  const loading = useSelector((state) => state.recruiters.loading);
  const error = useSelector((state) => state.recruiters.error);

  useEffect(() => {
    dispatch(getRecruiters());
    return () => {};
  }, [dispatch]);

  const onClickReload = () => {
    dispatch(loadRecruiters());
  };

  const onClickRemoveAll = () => {
    dispatch(removeAllRecruiters("All"));
  };
  return (
    <RecruiterView
      loading={loading}
      error={error}
      data={recruiters}
      startDateTime={startDateTime}
      columns={recruiterColumnsConfig}
      onClickReload={onClickReload}
      handleDateTimeChange={handleDateTimeChange}
      onClickRemoveAll={onClickRemoveAll}
    />
  );
};
