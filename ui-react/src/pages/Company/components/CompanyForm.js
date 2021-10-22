import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import { useForm } from "react-hook-form";
import { Grid, MenuItem, Paper } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FormInputText } from "components/FormInputText";
import FormInputSelect from "components/FormInputSelect";
import FormInputDate from "components/FormInputDate";
import TypographyErrorShow from "components/TypographyErrorShow";
import {
  JOBHOWS,
  JOBROLES,
  JOBTYPES,
  JOBWHERES,
  SOCIALACCOUNTS,
  WEEKDAYS,
} from "navigation/CONSTANTS";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const schema = yup.object({
  companyName: yup.string().required(),
  companySize: yup.number().positive().integer().required(),
  companyLocation: yup.string().required(),
  jobRole: yup.string().required(),
  jobType: yup.string().required(),
  jobRating: yup.string().required(),
  jobHow: yup.string().required(),
  jobWhere: yup.string().required(),
  jobReq: yup.string().required(),
  jobSkills: yup.string().required(),
  socialAccount: yup.string().required(),
  regDate: yup.string().required(),
  regWeekday: yup.string().required(),
});

const defaultValues = {
  companySize: "",
  companyName: "",
  companyLocation: "",
  jobRole: "frontendDev",
  jobType: "contract",
  jobRating: "",
  jobHow: "recruiter",
  jobWhere: "linkedin",
  jobReq: "",
  jobSkills: "",
  socialAccount: "usa",
  regDate: new Date(),
  regWeekday: "",
};

const CompanyForm = () => {
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
                <TypographyErrorShow>
                  {errors.companyName?.message}
                </TypographyErrorShow>
              </Grid>
              <Grid item xs={2}>
                <FormInputText
                  name="companySize"
                  control={control}
                  label="Company Size"
                  fullWidth
                />
                <TypographyErrorShow>
                  {errors.companySize?.message}
                </TypographyErrorShow>
              </Grid>
              <Grid item xs={5}>
                <FormInputText
                  name={"companyLocation"}
                  control={control}
                  label="Company Location"
                  fullWidth
                />
                <TypographyErrorShow>
                  {errors.companyLocation?.message}
                </TypographyErrorShow>
              </Grid>
              <Grid item xs={3}>
                <FormInputSelect
                  name="jobRole"
                  label="Choose one Type of Role"
                  control={control}
                  fullWidth
                >
                  {JOBROLES.map((oneRole) => (
                    <MenuItem key={oneRole.value} value={oneRole.value}>
                      {oneRole.text}
                    </MenuItem>
                  ))}
                </FormInputSelect>
                <TypographyErrorShow>
                  {errors.jobRole?.message}
                </TypographyErrorShow>
              </Grid>
              <Grid item xs={3}>
                <FormInputSelect
                  name="jobType"
                  label="Choose one Job Type"
                  control={control}
                  fullWidth
                >
                  {JOBTYPES.map((oneType) => (
                    <MenuItem key={oneType.value} value={oneType.value}>
                      {oneType.text}
                    </MenuItem>
                  ))}
                </FormInputSelect>
                <TypographyErrorShow>
                  {errors.jobType?.message}
                </TypographyErrorShow>
              </Grid>
              <Grid item xs={2}>
                <FormInputText
                  name={"jobRating"}
                  control={control}
                  label="Rating"
                  fullWidth
                />
                <TypographyErrorShow>
                  {errors.jobRating?.message}
                </TypographyErrorShow>
              </Grid>
              <Grid item xs={2}>
                <FormInputSelect
                  name="jobHow"
                  label="Choose one Job How"
                  control={control}
                  fullWidth
                >
                  {JOBHOWS.map((oneHow) => (
                    <MenuItem key={oneHow.value} value={oneHow.value}>
                      {oneHow.text}
                    </MenuItem>
                  ))}
                </FormInputSelect>
                <TypographyErrorShow>
                  {errors.jobHow?.message}
                </TypographyErrorShow>
              </Grid>
              <Grid item xs={2}>
                <FormInputSelect
                  name="jobWhere"
                  label="Choose one Job Where"
                  control={control}
                  fullWidth
                >
                  {JOBWHERES.map((oneWhere) => (
                    <MenuItem key={oneWhere.value} value={oneWhere.value}>
                      {oneWhere.text}
                    </MenuItem>
                  ))}
                </FormInputSelect>
                <TypographyErrorShow>
                  {errors.jobWhere?.message}
                </TypographyErrorShow>
              </Grid>
              <Grid item xs={8}>
                <FormInputText
                  name={"jobReq"}
                  control={control}
                  label="Requirements"
                  fullWidth
                  multiline
                />
                <TypographyErrorShow>
                  {errors.jobReq?.message}
                </TypographyErrorShow>
              </Grid>
              <Grid item xs={4}>
                <FormInputText
                  name={"jobSkills"}
                  control={control}
                  label="Skills"
                  fullWidth
                />
                <TypographyErrorShow>
                  {errors.jobSkills?.message}
                </TypographyErrorShow>
              </Grid>
              <Grid item xs={4}>
                <FormInputSelect
                  name="socialAccount"
                  label="Choose one account"
                  control={control}
                  fullWidth
                >
                  {SOCIALACCOUNTS.map((oneSocial) => (
                    <MenuItem key={oneSocial.value} value={oneSocial.value}>
                      {oneSocial.text}
                    </MenuItem>
                  ))}
                </FormInputSelect>
                <TypographyErrorShow>
                  {errors.socialAccount?.message}
                </TypographyErrorShow>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "center" }}>
                <FormInputDate
                  name="regDate"
                  control={control}
                  label="Registration Date"
                  fullWidth
                />
                <TypographyErrorShow>
                  {errors.regDate?.message}
                </TypographyErrorShow>
              </Grid>
              <Grid item xs={4}>
                <FormInputSelect
                  name="regWeekday"
                  label="Choose one weekday"
                  control={control}
                  fullWidth
                >
                  {WEEKDAYS.map((oneWeekday) => (
                    <MenuItem key={oneWeekday.value} value={oneWeekday.value}>
                      {oneWeekday.text}
                    </MenuItem>
                  ))}
                </FormInputSelect>
                <TypographyErrorShow>
                  {errors.regWeekday?.message}
                </TypographyErrorShow>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </Dialog>
    </div>
  );
};

export default CompanyForm;
