import mongoose from "mongoose";

const CompletedSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ["Urgent", "Important", "Normal"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Completed = mongoose.model("Completed", CompletedSchema);
