import * as React from "react";
import { CompanyForm } from "components/CompanyForm";
import { Heading } from "components/Heading";
import CompanyTable from "components/CompanyTable";

export const Company = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: 600,
        width: "100%",
      }}
    >
      <Heading variant="h2">Company</Heading>
      <CompanyForm />
      <CompanyTable />
    </div>
  );
};
