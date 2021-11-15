import React from "react";
import { CollapsibleTable } from "components/CollapsibleTable";
import { CustomTablePagination } from "components/CustomTablePagination";
import Heading from "components/Heading";

const Technical = () => {
  return (
    <div>
      <Heading>Technical</Heading>
      <CollapsibleTable />
      <CustomTablePagination />
    </div>
  );
};

export default Technical;
