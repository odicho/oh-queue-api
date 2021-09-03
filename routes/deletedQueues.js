import express from "express";
import {
  readDeletedQueues,
  createDeletedQueue,
} from "../controller/deletedQueues.js";

const router = express.Router();
router.get("/", readDeletedQueues);
router.post("/:id", createDeletedQueue);
// router.patch("/:id", updateQueue);
// router.delete("/:id", deleteQueue);

export default router;
