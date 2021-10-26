import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const FormInputText = ({
  name,
  control,
  defaultValue,
  label,
  fullWidth,
  multiline,
  rows,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          fullWidth={fullWidth}
          multiline={multiline}
          rows={rows}
        />
      )}
    />
  );
};
