import mongoose from "mongoose";
const Schema = mongoose.Schema;
const queueSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const QueueModel = mongoose.model("Queue", queueSchema);
export default QueueModel;
