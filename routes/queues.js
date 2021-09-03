import express from "express";
import {
  createQueue,
  moveDeletedQueue,
  readQueues,
  updateQueue,
} from "../controller/queues.js";

const router = express.Router();
router.get("/", readQueues);
router.post("/", createQueue);
router.patch("/:id", updateQueue);
router.delete("/:id", moveDeletedQueue);

export default router;
