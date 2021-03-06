import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Country, State, City } from "country-state-city";

import { useForm } from "react-hook-form";
import { Grid, MenuItem, Paper } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import FormInputText from "components/FormInputText";
import FormInputSelect from "components/FormInputSelect";
import FormInputDate from "components/FormInputDate";
import TypographyErrorShow from "components/TypographyErrorShow";
import { JOBROLES, JOBTYPES } from "navigation/CONSTANTS";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

console.log(Country.getAllCountries());
console.log(State.getAllStates());

const CompanyForm = ({
  handleClickSave,
  open,
  setOpen,
  modalFlag,
  companySchema,
  defaultCompanyValues,
  handleClickDelete,
  handleClickUpdate,
  handleClickAddOpen,
  handleClickEditOpen,
  disableEditBtn,
  disableDeleteBtn,
  selectedEditValue,
}) => {
  const {
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(companySchema),
    defaultValues: defaultCompanyValues,
  });
  React.useEffect(() => {
    if (Object.keys(selectedEditValue).length > 0 && open) {
      setValue("companyLocation", selectedEditValue.companyLocation);
      setValue("companyName", selectedEditValue.companyName);
      setValue("companySize", selectedEditValue.companySize);
      setValue("jobRating", selectedEditValue.jobRating);
      setValue("jobReq", selectedEditValue.jobReq);
      setValue("jobRole", selectedEditValue.jobRole);
      setValue("jobSkills", selectedEditValue.jobSkills);
      setValue("jobType", selectedEditValue.jobType);
      setValue("regDate", selectedEditValue.regDate);
      setValue("country", selectedEditValue.country);
    } else {
      setValue("companyLocation", defaultCompanyValues.companyLocation);
      setValue("companyName", defaultCompanyValues.companyName);
      setValue("companySize", defaultCompanyValues.companySize);
      setValue("jobRating", defaultCompanyValues.jobRating);
      setValue("jobReq", defaultCompanyValues.jobReq);
      setValue("jobRole", defaultCompanyValues.jobRole);
      setValue("jobSkills", defaultCompanyValues.jobSkills);
      setValue("jobType", defaultCompanyValues.jobType);
      setValue("regDate", defaultCompanyValues.regDate);
      setValue("country", defaultCompanyValues.country);
    }
  }, [selectedEditValue, open, setValue, defaultCompanyValues]);

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    if (Object.keys(selectedEditValue).length > 0 && modalFlag === "update") {
      handleClickUpdate(selectedEditValue.id, data);
    } else {
      handleClickSave(data);
    }
  };
  return (
    <div style={{ alignSelf: "end", marginBottom: "16px" }}>
      <Button variant="outlined" onClick={handleClickAddOpen} sx={{ mr: 2 }}>
        Add New
      </Button>
      <Button
        variant="outlined"
        onClick={handleClickEditOpen}
        sx={{ mr: 2 }}
        disabled={disableEditBtn}
      >
        Edit Row
      </Button>
      <Button
        variant="outlined"
        onClick={handleClickDelete}
        disabled={disableDeleteBtn}
      >
        Delete Rows
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
                <FormInputText
                  name={"jobReq"}
                  control={control}
                  label="Requirements"
                  fullWidth
                  multiline
                  rows={4}
                />
                <TypographyErrorShow>
                  {errors.jobReq?.message}
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
            </Grid>
          </Paper>
        </form>
      </Dialog>
    </div>
  );
};

export default CompanyForm;
