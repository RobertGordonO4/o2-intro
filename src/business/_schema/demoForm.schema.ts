import { z } from "zod";

export const demoFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  comment: z.string().min(1, "Comment cannot be empty"),
  category: z.enum(["A", "B", "C"], { message: "Please select a valid category" })
})

export type DemoFormSchema = z.infer<typeof demoFormSchema>

export const categoryOptions = Object.values(demoFormSchema.shape.category._def.values).map(value => ({
  label: value,
  value
}))