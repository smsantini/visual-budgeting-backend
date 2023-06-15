import mongoose from "mongoose";
import itemSchema from "./itemsSchema.js";
const itemModel = mongoose.model("item", itemSchema);
export default itemModel;