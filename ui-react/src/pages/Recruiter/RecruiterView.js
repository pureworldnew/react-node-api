import React from "react";
import RecruiterList from "./components/RecruiterList";
import { Heading } from "components/Heading";

const RecruiterView = ({ loading, error, data, columns, onClickReload }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: 600,
        width: "100%",
      }}
    >
      <Heading>Recruiter</Heading>
      <button onClick={onClickReload}>Reload</button>
      <RecruiterList
        loading={loading}
        error={error}
        data={data}
        columns={columns}
      />
    </div>
  );
};

export default RecruiterView;
