import mongoose, { Document } from "mongoose";

// type from TypeScript and Mongoose (Document)
export type UserDocument = Document & {
  email: string;
  password: string;
};
const UserSchema = new mongoose.Schema({
  // type from database
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export default mongoose.model<UserDocument>("User", UserSchema);
