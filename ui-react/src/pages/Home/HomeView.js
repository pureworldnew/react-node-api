import React from "react";
import PropTypes from "prop-types";
import { LanguageSelection } from "./components/LanguageSelection";
import { Typography, Button } from "@mui/material";
import { DASHBOARD, ROOT } from "navigation/CONSTANTS";
import { useHistory } from "react-router-dom";

const HomeView = (props) => {
  const history = useHistory();
  const goTo = (path) => {
    history.push(path || ROOT);
  };
  return (
    <div>
      <Typography variant="h2">HomeView {props.title}</Typography>
      <LanguageSelection />
      <Button
        variant="contained"
        color="primary"
        onClick={() => goTo(DASHBOARD)}
      >
        Dashboard
      </Button>
    </div>
  );
};

HomeView.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomeView;
