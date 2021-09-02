import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import queuesRoutes from "./routes/queues.js";
import deletedQueuesRoutes from "./routes/deletedQueues.js";
import mongoose from "mongoose";

const app = express();
dotenv.config({ path: "./config.env" });

try {
  await mongoose.connect(process.env.MONGO_URI || process.env.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB Successful");
} catch (error) {
  console.log("MongoDB Failed");
  process.exit(1);
}

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/queues", queuesRoutes);
app.use("/deletedQueues", deletedQueuesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
