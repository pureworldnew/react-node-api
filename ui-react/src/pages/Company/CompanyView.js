import React from "react";
import CompanyForm from "pages/Company/components/CompanyForm";
import CompanyTable from "pages/Company/components/CompanyTable";
import { Heading } from "components/Heading";

const CompanyView = ({ loading, error, data, columns }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: 600,
        width: "100%",
      }}
    >
      <Heading>Company</Heading>
      <CompanyForm />
      <CompanyTable
        loading={loading}
        error={error}
        data={data}
        columns={columns}
      />
    </div>
  );
};

export default CompanyView;
