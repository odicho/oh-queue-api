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

const DeletedQueueModel = mongoose.model("deletedqueues", queueSchema);
export default DeletedQueueModel;
