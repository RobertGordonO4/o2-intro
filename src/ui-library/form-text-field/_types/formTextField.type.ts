import { Control, FieldValues } from "react-hook-form"
import { DemoFormSchema } from "../../../business/_schema/demoForm.schema"

export type FormTextFieldProps = {
  /**
   * Control object from react-hook-form
   */
  control: Control<FieldValues, any>
  /**
   * Name of the field within the form schema
   */
  name: keyof DemoFormSchema
  /**
   * Label of the form field - displayed above the field
   */
  label: string
  /**
   * Optional: Secondary Label of the form field - displayed next to the main label
   */
  secondaryLabel?: string
  /**
   * Optional: bool to use the textarea/multiline version of a TextField
   */
  textarea?: boolean
  /**
   * Optional: bool to use the select/dropdown version of a TextField. Options need to be passed if this is true
   */
  select?: boolean
  /**
   * Use with select true -> Optional: bool to use the textare version of a TextField
   */
  options?: { label: string, value: string }[]
}