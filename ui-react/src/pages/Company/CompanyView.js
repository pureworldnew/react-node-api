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
  open,
  setOpen,
  modalFlag,
  companySchema,
  defaultCompanyValues,
  setSelectedRows,
  selectedEditValue,
  disableEditBtn,
  disableDeleteBtn,
  handleClickSave,
  handleClickAddOpen,
  handleClickEditOpen,
  handleClickUpdate,
  handleClickDelete,
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
        open={open}
        setOpen={setOpen}
        modalFlag={modalFlag}
        companySchema={companySchema}
        defaultCompanyValues={defaultCompanyValues}
        disableEditBtn={disableEditBtn}
        disableDeleteBtn={disableDeleteBtn}
        handleClickSave={handleClickSave}
        handleClickDelete={handleClickDelete}
        handleClickAddOpen={handleClickAddOpen}
        handleClickEditOpen={handleClickEditOpen}
        handleClickUpdate={handleClickUpdate}
        selectedEditValue={selectedEditValue}
      />
      <CompanyList
        loading={loading}
        error={error}
        data={data}
        columns={columns}
        setSelectedRows={setSelectedRows}
      />
    </div>
  );
};

export default CompanyView;
