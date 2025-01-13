import TextField from "@mui/material/TextField";
import React from "react";

interface TextFieldComponentProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  id?: string;
}

export const TextFieldComponent: React.FC<TextFieldComponentProps> = ({
  label,
  value,
  onChange,
  error,
  id,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <TextField
      id={id}
      label={label}
      variant="outlined"
      value={value}
      onChange={handleChange}
      error={!!error}
      helperText={error}
    ></TextField>
  );
};
