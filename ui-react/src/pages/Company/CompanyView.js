import React, { memo } from "react";
import CompanyForm from "pages/Company/components/CompanyForm";
import CompanyList from "pages/Company/components/CompanyList";
import { Heading } from "components/Heading";

const MemoCompanyForm = memo(CompanyForm);

const CompanyView = ({
  loading,
  error,
  data,
  columns,
  saveCompany,
  open,
  setOpen,
  companySchema,
  defaultCompanyValues,
  handleClickDelete,
  setDeletedRows,
}) => {
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
      <MemoCompanyForm
        saveCompany={saveCompany}
        open={open}
        setOpen={setOpen}
        companySchema={companySchema}
        defaultCompanyValues={defaultCompanyValues}
        handleClickDelete={handleClickDelete}
      />
      <CompanyList
        loading={loading}
        error={error}
        data={data}
        columns={columns}
        setDeletedRows={setDeletedRows}
      />
    </div>
  );
};

export default CompanyView;
