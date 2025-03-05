import { z } from "zod";

const userSchemas = z.object({
  firstName: z
    .string()
    .min(5, { message: "minimum 5 characters are allowed!" })
    .max(50, { message: "maximum 50 characters are allowed!" }),
  lastName: z
    .string()
    .min(5, { message: "minimum 5 characters are allowed!" })
    .max(50, { message: "maximum 50 characters are allowed!" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(1024)
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
      message:
        " must contain at least one uppercase letter, one lowercase letter, and one number",
    }),
  location: z
    .string({ required_error: "location is required!" })
    .min(3, { message: "Minimum 3 character allowed!" }),
});

export type userData = z.infer<typeof userSchemas>;

export default userSchemas;
