import React from "react";
import RecruiterList from "./components/RecruiterList";
import { Heading } from "components/Heading";
import { Button } from "@mui/material";

const RecruiterView = ({ loading, error, data, columns, onClickReload }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: 800,
        width: "100%",
      }}
    >
      <Heading>Recruiter</Heading>
      <Button
        variant="outlined"
        onClick={onClickReload}
        style={{ maxWidth: 800, alignSelf: "center", marginBottom: "16px" }}
      >
        Reload
      </Button>
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
