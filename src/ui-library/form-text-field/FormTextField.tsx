import { FC } from "react"
import { FormTextFieldProps } from "./_types/formTextField.type"
import { Controller } from "react-hook-form"
import { FormHelperText, FormLabel, Stack, TextField, Typography, MenuItem, useTheme } from "@mui/material"
import './formTextField.css'

export const FormTextField: FC<FormTextFieldProps> = ({ 
  control, 
  name, 
  label, 
  secondaryLabel, 
  textarea, 
  select, 
  options = [],
}) => {
  const theme = useTheme()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack spacing={theme.spacing("xs")} className="o2-textfield-container">
          <FormLabel className="o2-textfield-label-container">
            <Typography variant="labelM">{label}</Typography>
            {secondaryLabel && <Typography variant="labelS">{secondaryLabel}</Typography>}
          </FormLabel>
          <TextField
            {...field}
            error={!!error}
            multiline={textarea}
            rows={4}
            select={select}
            className="o2-textfield"
          >
            {select && options.map((option: { value: string | number; label: string }) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {error && <FormHelperText error>{error.message}</FormHelperText>}
        </Stack>
      )}
    />
  )
}
