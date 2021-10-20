import React from "react";
import { Typography } from "@mui/material";

const TypographyErrorShow = ({ children }) => {
  return (
    <React.Fragment>
      <Typography mt={1} sx={{ color: "error.dark" }}>
        {children}
      </Typography>
    </React.Fragment>
  );
};

export default TypographyErrorShow;
