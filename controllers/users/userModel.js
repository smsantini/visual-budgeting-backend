import mongoose from "mongoose";
import userSchema from "./userSchema.js";
const userModel = mongoose.model("user", userSchema);
export default userModel;