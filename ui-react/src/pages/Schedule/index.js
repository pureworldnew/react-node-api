import React from "react";
import CustomSkeleton from "components/CustomSkeleton";
import { Heading } from "components/Heading";

export const Schedule = () => {
  return (
    <div>
      <Heading variant="h2">Schedule</Heading>
      <CustomSkeleton />
    </div>
  );
};
