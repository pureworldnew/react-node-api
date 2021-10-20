import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import { Controller, useForm } from "react-hook-form";
import {
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormInputText } from "./FormInputText";

import { Box } from "@mui/system";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const schema = yup.object({
  companyName: yup.string().required(),
  // companySize: yup.number().positive().integer().required(),
  // companyLocation: yup.string().required(),
  // jobRole: yup.string().required(),
  // jobType: yup.string().required(),
  // jobRating: yup.string().required(),
  // jobHow: yup.string().required(),
  // jobWhere: yup.string().required(),
  // jobReq: yup.string().required(),
  // jobSkills: yup.string().required(),
  // socialAccount: yup.string().required(),
  // regDate: yup.string().required(),
  // regWeekday: yup.string().required(),
});

const defaultValues = {
  companySize: "",
  companyName: "",
  companyLocation: "",
  jobRole: "",
  jobType: "",
  jobRating: "",
  jobHow: "",
  jobWhere: "",
  jobReq: "",
  jobSkills: "",
  socialAccount: "",
  regDate: "",
  regWeekday: "",
};

export const CustomModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues: defaultValues });
  const onSubmit = (data) => console.log(data);

  // console.log(watch("companySize"));

  return (
    <div style={{ alignSelf: "end", marginBottom: "16px" }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <form>
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Cancel
              </Typography>
              <Button
                autoFocus
                color="inherit"
                onClick={handleSubmit(onSubmit)}
              >
                save
              </Button>
              <Button onClick={() => reset()} color="inherit">
                Reset
              </Button>
            </Toolbar>
          </AppBar>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <FormInputText
                  name="companyName"
                  control={control}
                  label="Company Name"
                  fullWidth
                />
                <p>{errors.companyName?.message}</p>
              </Grid>
              <Grid item xs={2}>
                <FormInputText
                  name="companySize"
                  control={control}
                  label="Company Size"
                  fullWidth
                />
                <p>{errors.companySize?.message}</p>
              </Grid>
              <Grid item xs={5}>
                <FormInputText
                  name={"companyLocation"}
                  control={control}
                  label="Company Location"
                  fullWidth
                />
                <p>{errors.companyLocation?.message}</p>
              </Grid>
              <Grid item xs={3}>
                <FormInputText
                  name={"jobRole"}
                  control={control}
                  label="Role"
                  fullWidth
                />
                <p>{errors.jobRole?.message}</p>
              </Grid>
              <Grid item xs={3}>
                <FormInputText
                  name={"jobType"}
                  control={control}
                  label="Type"
                  fullWidth
                />
                <p>{errors.jobType?.message}</p>
              </Grid>
              <Grid item xs={2}>
                <FormInputText
                  name={"jobRating"}
                  control={control}
                  label="Rating"
                  fullWidth
                />
                <p>{errors.jobRating?.message}</p>
              </Grid>
              <Grid item xs={2}>
                <FormInputText
                  name={"jobHow"}
                  control={control}
                  label="How"
                  fullWidth
                />
                <p>{errors.jobHow?.message}</p>
              </Grid>
              <Grid item xs={2}>
                <FormInputText
                  name={"jobWhere"}
                  control={control}
                  label="Where"
                  fullWidth
                />
                <p>{errors.jobWhere?.message}</p>
              </Grid>
              <Grid item xs={8}>
                <FormInputText
                  name={"jobReq"}
                  control={control}
                  label="Requirements"
                  fullWidth
                />
                <p>{errors.jobReq?.message}</p>
              </Grid>
              <Grid item xs={4}>
                <FormInputText
                  name={"jobSkills"}
                  control={control}
                  label="Skills"
                  fullWidth
                />
                <p>{errors.jobSkills?.message}</p>
              </Grid>
              <Grid item xs={4}>
                <FormInputText
                  name={"socialAccount"}
                  control={control}
                  label="Account"
                  fullWidth
                />
                <p>{errors.socialAccount?.message}</p>
              </Grid>
              <Grid item xs={4}>
                <FormInputText
                  name={"regDate"}
                  control={control}
                  label="Registration Date"
                  fullWidth
                />
                <p>{errors.regDate?.message}</p>
              </Grid>
              <Grid item xs={4}>
                <FormInputText
                  name={"regWeekday"}
                  control={control}
                  label="Registration Weekday"
                  fullWidth
                />
                <p>{errors.regWeekday?.message}</p>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </Dialog>
    </div>
  );
};
