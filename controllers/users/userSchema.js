import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        userId: { type: Number, required: true, unique: true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        income: Number,
        incomePeriod: String
    },
    { collection: "Users" }
);
export default userSchema;