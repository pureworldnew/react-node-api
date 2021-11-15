import React, { useState, useEffect, useRef } from "react";
import CompanyView from "./CompanyView";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import {
  addCompany,
  getCompanies,
  modalOpen,
  setSelectedIds,
  getSingleCompany,
  addOpenModal,
  updateCompany,
  removeCompany,
} from "redux/actions/companyAction";
import { companyColumnsConfig } from "config";

const companySchema = yup.object({
  companyName: yup.string().required(),
  companySize: yup.number().positive().integer().required(),
  companyLocation: yup.string().required(),
  jobRole: yup.string().required(),
  jobType: yup.string().required(),
  jobRating: yup.string().required(),
  jobHow: yup.string().required(),
  jobWhere: yup.string().required(),
  jobReq: yup.string().required(),
  jobSkills: yup.string().required(),
  socialAccount: yup.string().required(),
  regDate: yup.string().required(),
  regWeekday: yup.string().required(),
});

const defaultCompanyValues = {
  companySize: "",
  companyName: "",
  companyLocation: "",
  jobRole: "frontendDev",
  jobType: "contract",
  jobRating: "",
  jobHow: "recruiter",
  jobWhere: "linkedin",
  jobReq: "",
  jobSkills: "",
  socialAccount: "usa",
  regDate: new Date(),
  regWeekday: "",
};

export function CompanyContainer() {
  const dispatch = useDispatch();
  const [disableEditBtn, setDisableEditBtn] = useState(true);
  const [disableDeleteBtn, setDisableDeleteBtn] = useState(true);
  const companies = useSelector((state) => state.companies.companies);
  const loading = useSelector((state) => state.companies.loading);
  const error = useSelector((state) => state.companies.error);
  const open = useSelector((state) => state.companies.modalOpen);
  const modalFlag = useSelector((state) => state.companies.modalFlag);
  const selectedIds = useSelector((state) => state.companies.selectedIds);
  const selectedEditValue = useSelector(
    (state) => state.companies.selectedEditValue
  );
  const componentIsMounted = useRef(true);

  useEffect(() => {
    if (componentIsMounted) {
      dispatch(getCompanies());
    }
    return () => {
      componentIsMounted.current = false;
    };
  }, [dispatch]);

  const handleClickSave = (data) => {
    dispatch(addCompany(data));
  };

  const handleClickEditOpen = () => {
    dispatch(getSingleCompany(selectedIds));
  };
  const handleClickAddOpen = () => {
    dispatch(addOpenModal());
  };

  const setOpen = (val) => {
    dispatch(modalOpen(val));
  };

  const handleClickUpdate = (id, data) => {
    dispatch(updateCompany(id, data));
  };

  const handleClickDelete = () => {
    if (selectedIds.length === companies.length) {
      dispatch(removeCompany("All"));
    } else {
      dispatch(removeCompany(selectedIds));
    }
  };

  const setSelectedRows = (ids) => {
    dispatch(setSelectedIds(ids));
    ids.length === 1 ? setDisableEditBtn(false) : setDisableEditBtn(true);
    ids.length >= 1 ? setDisableDeleteBtn(false) : setDisableDeleteBtn(true);
  };
  return (
    <CompanyView
      loading={loading}
      error={error}
      data={companies}
      columns={companyColumnsConfig}
      handleClickSave={handleClickSave}
      handleClickAddOpen={handleClickAddOpen}
      handleClickEditOpen={handleClickEditOpen}
      handleClickUpdate={handleClickUpdate}
      open={open}
      setOpen={setOpen}
      modalFlag={modalFlag}
      companySchema={companySchema}
      defaultCompanyValues={defaultCompanyValues}
      handleClickDelete={handleClickDelete}
      setSelectedRows={setSelectedRows}
      disableEditBtn={disableEditBtn}
      disableDeleteBtn={disableDeleteBtn}
      selectedEditValue={selectedEditValue}
    />
  );
}
