import React from "react";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
// MUI Stuff
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  padLoading: {
    paddingLeft: 8,
  },
});

function LoadingButton(props) {
  const { children, isLoading } = props;
  const classes = useStyles();
  return (
    <>
      <Button
        {...props}
        variant={props.variant || "contained"}
        color={props.color || "primary"}
        disabled={isLoading || props.disabled}
      >
        {isLoading && <CircularProgress size={20} />}
        {/* You can add your required styling to the button text/children */}
        <Typography
          component="span"
          className={isLoading ? classes.padLoading : null}
        >
          {children}
        </Typography>
        {/* {children} */}
      </Button>
    </>
  );
}

LoadingButton.propTypes = {
  children: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  btnVariant: PropTypes.string,
  btnClass: PropTypes.string,
  btnColor: PropTypes.string,
  btnType: PropTypes.string,
  onClickHandle: PropTypes.func,
};

export default LoadingButton;
