import React, { useState, useEffect } from "react";
import CompanyView from "./CompanyView";
import apiCompanies from "services/api/companies";
import * as yup from "yup";

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

function getData() {
  return apiCompanies.getAll();
}
export function CompanyContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    getData()
      .then((res) => {
        setLoading(false);
        console.log(res);
        setData(res);
      })
      .catch((error) => setError(error));

    return () => {
      console.log("company Table axios cleanup");
    };
  }, []);

  const saveCompany = (data) => {
    console.log("save company data", data);
    apiCompanies
      .post(data)
      .then((res) => {
        console.log(res);
        getData()
          .then((res) => {
            setOpen(false);
            setLoading(false);
            setData(res);
          })
          .catch((error) => setError(error));
      })
      .catch((error) => setError(error));
  };

  return (
    <CompanyView
      loading={loading}
      error={error}
      data={data}
      columns={columns}
      saveCompany={saveCompany}
      open={open}
      setOpen={setOpen}
      companySchema={companySchema}
      defaultCompanyValues={defaultCompanyValues}
    />
  );
}
