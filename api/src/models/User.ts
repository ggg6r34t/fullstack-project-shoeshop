import mongoose, { Document } from "mongoose";

// type from TypeScript and Mongoose (Document)
export type UserDocument = Document & {
  email: string | number;
  password: string | number;
};
const UserSchema = new mongoose.Schema({
  // type from database
  email: { type: String || Number, required: true },
  password: { type: String || Number, required: true },
});

export default mongoose.model<UserDocument>("User", UserSchema);
