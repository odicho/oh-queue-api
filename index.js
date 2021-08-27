import express from "express";
import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";
import cors from "cors";
import queuesRoutes from "./routes/queues.js";
import connectDB from "./config/db";

connectDB();

dotenv.config({ path: "./config.env" });
const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/queues", queuesRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://ammuhAdmin:gdFEaryLV3Zi9Ufg@queue-project.gd784.mongodb.net/queueDb?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .catch((err) => console.log(err));
