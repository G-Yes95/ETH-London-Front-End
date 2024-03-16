import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface CustomTextFieldProps {
  label: string;
  variant?: "outlined" | "filled" | "standard";
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  variant = "outlined",
}) => {
  return (
    <TextField
      id={label.toLowerCase().replace(/\s/g, "-")}
      label={label}
      variant={variant}
    />
  );
};

export default function MyForm() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <CustomTextField label="Outlined" variant="outlined" />
    </Box>
  );
}
