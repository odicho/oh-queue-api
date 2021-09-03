import express from "express";
import {
  readDeletedQueues,
  createDeletedQueue,
  deleteDeletedQueue,
} from "../controller/deletedQueues.js";

const router = express.Router();
router.get("/", readDeletedQueues);
router.post("/:id", createDeletedQueue);
router.delete("/:id", deleteDeletedQueue);
// router.patch("/:id", updateQueue);
// router.delete("/:id", deleteQueue);

export default router;
