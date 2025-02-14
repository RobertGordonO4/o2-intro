import { FC } from "react";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categoryOptions, demoFormSchema } from "./_schema/demoForm.schema";
import { FormTextField } from "../ui-library/form-text-field/FormTextField";
import { Stack, useTheme } from "@mui/material";

export const DemoForm: FC = () => {
  const {control} = useForm({
    resolver: zodResolver(demoFormSchema),
    mode: 'onChange',
  })
  const theme = useTheme()

  return (
    <Form control={control}>
      <Stack spacing={theme.spacing("l")}>
        <FormTextField 
          control={control}
          name="firstName"
          label="First name"
          secondaryLabel="Meno"
        />
        <FormTextField 
          control={control}
          name="lastName"
          label="Last name"
          secondaryLabel="Priezvisko"
        />
        <FormTextField
          control={control}
          name="category" 
          label="Category"
          select
          options={categoryOptions}
        />
        <FormTextField
          control={control}
          name="comment"
          label="Comment"
          placeholder="Blablabla..."
          textarea
        />  
      </Stack>
    </Form>
  )
}