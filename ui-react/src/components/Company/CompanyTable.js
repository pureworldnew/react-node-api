import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { companyApi } from "services";
import apiCompanies from "services/api/companies";

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
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, "companySize") || ""} ${
  //       params.getValue(params.id, "jobWhere") || ""
  //     }`,
  // },
];

let rows = [];
let arraySize = 10;
while (arraySize--)
  rows.push({
    id: arraySize,
    companySize: Math.floor(Math.random() * 101),
    companyName: "Demo Company",
    companyLocation: "Texas",
    jobRole: "frontend developer",
    jobType: arraySize % 2 ? "Contract" : "Full time",
    jobRating: "150k",
    jobReq: "test job description",
    jobSkills: "React, Node, Javascript",
    jobWhere: arraySize % 2 ? "Linkedin" : "Indeed",
    jobHow: arraySize % 2 ? "Recruiter" : "job bid",
    socialAccount: arraySize % 2 ? "China" : "US",
    regDate: "2021-09-21",
    regWeekday: "Monday",
  });

const CompanyTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    apiCompanies.getAll().then((res) => {
      setLoading(false);
      console.log(res);
      setData(res);
    });

    return () => {
      console.log("company Table axios cleanup");
    };
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>ERROR: {error}</div>;
  }

  return (
    <DataGrid
      rows={data}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
  );
};

export default CompanyTable;
