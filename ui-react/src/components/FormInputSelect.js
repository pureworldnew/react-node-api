import { FormControl, InputLabel, Select } from "@mui/material";
import { Controller } from "react-hook-form";

const FormInputSelect = ({
  name,
  label,
  control,
  defaultValue,
  children,
  multiple,
  ...props
}) => {
  const labelId = `${name}-label`;
  return (
    <FormControl {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Select label={label} {...field}>
            {children}
          </Select>
        )}
      />
    </FormControl>
  );
};
export default FormInputSelect;
