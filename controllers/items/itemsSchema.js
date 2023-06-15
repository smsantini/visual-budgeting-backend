import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
    {
        itemId: { type: Number, required: true, unique: true },
        userId: { type: Number, required: true },
        level: Number,
        title: String,
        expected: String,
        actual: String,
        adjusted: Boolean
    },
    { collection: "Items" }
);
export default itemSchema;