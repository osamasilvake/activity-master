import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  {
    _id: { type: String, required: true }, // This tells Mongoose that `_id` is a string (UUID)
  }
);

export default mongoose.model("Activity", activitySchema);
