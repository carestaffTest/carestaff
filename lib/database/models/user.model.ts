import { Schema, model, models } from "mongoose";

export interface IUser extends Document {
  _id: string;
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  photo: string;
  position: string;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
  position: { type: String, required: true },
});

const User = models.User || model("User", UserSchema);

export default User;
