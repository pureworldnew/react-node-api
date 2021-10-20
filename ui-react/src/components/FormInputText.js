import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const FormInputText = ({ name, control, defaultValue, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      label={label}
      defaultValue={defaultValue}
      render={({ field }) => <TextField {...field} />}
    />
  );
};
