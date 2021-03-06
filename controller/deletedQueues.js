import mongoose from "mongoose";
import DeletedQueueModel from "../models/deletedQueues.js";

export const readDeletedQueues = async (req, res) => {
  try {
    const queues = await DeletedQueueModel.find();
    res.status(200).json(queues);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createDeletedQueue = async (req, res) => {
  const queue = new DeletedQueueModel(req.body);
  try {
    await queue.save();
    res.status(201).json(queue);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

// export const updateQueue = async (req, res) => {
//   const { id } = req.params;
//   const { firstName, lastName } = req.body;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).send(`The id ${id} is not valid`);
//   }

//   const queueItem = { firstName, lastName, _id: id };
//   await QueueModel.findByIdAndUpdate(id, queueItem, { new: true });
//   res.json(queueItem);
// };

export const deleteDeletedQueue = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`The id ${id} is not valid`);
  }

  await DeletedQueueModel.findByIdAndRemove(id);
  res.json({ message: "Queue Item Deleted Successfully" });
};
