import React, { useEffect } from "react";
import RecruiterView from "./RecruiterView";
import { useSelector, useDispatch } from "react-redux";
import { getRecruiters, loadRecruiters } from "redux/actions/recruiterAction";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "createdAt",
    headerName: "Created",
    width: 150,
    editable: true,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 150,
    editable: true,
  },
  {
    field: "startTime",
    headerName: "Start Time",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "interviewerName",
    headerName: "Interviewer Name",
    width: 150,
    editable: true,
  },
  {
    field: "companyName",
    headerName: "Company Name",
    width: 150,
    editable: true,
  },
  {
    field: "roleName",
    headerName: "Role Name",
    width: 100,
  },
  {
    field: "kindOfInterview",
    headerName: "Kind Of Interview",
    width: 150,
  },
  {
    field: "extraNotes",
    headerName: "Anything sharing",
    width: 200,
  },
];
export const RecruiterContainer = () => {
  const dispatch = useDispatch();

  const recruiters = useSelector((state) => state.recruiters.recruiters);
  console.log(recruiters);
  const loading = useSelector((state) => state.recruiters.loading);
  const error = useSelector((state) => state.recruiters.error);

  useEffect(() => {
    dispatch(getRecruiters());
    return () => {};
  }, [dispatch]);

  const onClickReload = () => {
    dispatch(loadRecruiters());
  };
  return (
    <RecruiterView
      loading={loading}
      error={error}
      data={recruiters}
      columns={columns}
      onClickReload={onClickReload}
    />
  );
};
