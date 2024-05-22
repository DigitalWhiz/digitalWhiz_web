import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    name: {
      type: String,
      required: [true, "fullname is required"],
      minLength: [3, "fullname must be at least 3 characters"],
      maxLength: [20, "fullname must be at most 20 characters"],
    },
    // image: {
    //   type: String,
    //   default: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

    // }
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);
export default User;



// import { z } from 'zod';

// // Define un esquema de validación con Zod para los datos de usuario
// export const userSchema = z.object({
//     name: z.string().min(3).max(20).nonempty().trim(),
//     email: z.string().email().nonempty().trim(),
//     password: z.string().min(6).nonempty().trim(),
// });

// export type User = z.infer<typeof userSchema>;
