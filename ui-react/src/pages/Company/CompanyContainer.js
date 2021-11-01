import React, { useState, useEffect } from "react";
import CompanyView from "./CompanyView";
import { useSelector, useDispatch } from "react-redux";
import apiCompanies from "services/api/companies";
import * as yup from "yup";
import {
  addCompany,
  getCompanies,
  modalOpen,
  setSelectedIds,
  getSingleCompany,
  addOpenModal,
  updateCompany,
} from "redux/actions/companyAction";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "companyName",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "companySize",
    headerName: "Size",
    type: "number",
    width: 80,
    editable: true,
  },
  {
    field: "companyLocation",
    headerName: "Location",
    width: 150,
    editable: true,
  },
  {
    field: "jobRole",
    headerName: "Role",
    width: 150,
    editable: true,
  },
  {
    field: "jobType",
    headerName: "Type",
    width: 100,
  },
  {
    field: "jobRating",
    headerName: "Rating",
    width: 100,
  },
  {
    field: "jobHow",
    headerName: "How",
    width: 100,
  },
  {
    field: "jobWhere",
    headerName: "Where",
    width: 100,
    editable: true,
  },
  {
    field: "jobReq",
    headerName: "Requirements",
    width: 150,
    editable: true,
  },
  {
    field: "jobSkills",
    headerName: "Skills",
    width: 210,
    editable: true,
  },
  {
    field: "socialAccount",
    headerName: "Account",
    width: 100,
  },
  {
    field: "regDate",
    headerName: "Date",
    width: 100,
  },
  {
    field: "regWeekday",
    headerName: "weekday",
    width: 100,
  },
];

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
  // const [selectedIds, setSelectedIds] = useState(null);
  // const [selectedEditValue, setSelectedEditValue] = useState({});

  const companies = useSelector((state) => state.companies.companies);
  const loading = useSelector((state) => state.companies.loading);
  const error = useSelector((state) => state.companies.error);
  const open = useSelector((state) => state.companies.modalOpen);
  const modalFlag = useSelector((state) => state.companies.modalFlag);
  const selectedIds = useSelector((state) => state.companies.selectedIds);
  const selectedEditValue = useSelector(
    (state) => state.companies.selectedEditValue
  );

  useEffect(() => {
    dispatch(getCompanies());
  }, []);

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
    // apiCompanies
    //   .put(id, data)
    //   .then((res) => {
    //     console.log(res);
    //     getData()
    //       .then((res) => {
    //         setOpen(false);
    //         setLoading(false);
    //         setData(res);
    //       })
    //       .catch((error) => setError(error));
    //   })
    //   .catch((error) => console.log(error));
  };

  const handleClickDelete = () => {
    // if (selectedIds.length === data.length) {
    //   apiCompanies.removeAll("All").then((res) => {
    //     console.log(res);
    //     getData()
    //       .then((res) => {
    //         setLoading(false);
    //         setData(res);
    //       })
    //       .catch((error) => setError(error));
    //   });
    // }
    // apiCompanies.remove(selectedIds).then((res) => {
    //   getData()
    //     .then((res) => {
    //       setLoading(false);
    //       setData(res);
    //     })
    //     .catch((error) => setError(error));
    // });
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
      columns={columns}
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
