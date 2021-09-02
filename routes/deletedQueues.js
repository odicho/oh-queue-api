import express from "express";
import {
  createQueue,
  deleteQueue,
  readQueues,
  updateQueue,
} from "../controller/queues.js";

const router = express.Router();
router.get("/", readQueues);
router.post("/", createQueue);
router.patch("/:id", updateQueue);
router.delete("/:id", deleteQueue);

export default router;
