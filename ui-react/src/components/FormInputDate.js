import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const FormInputDate = ({ name, control, fullWidth, label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...rest } }) => (
          <DesktopDatePicker
            label={label}
            inputFormat="MM/dd/yyyy"
            renderInput={(params) => <TextField {...params} />}
            {...rest}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default FormInputDate;
