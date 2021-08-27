import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import queuesRoutes from "./routes/queues.js";
import mongoose from "mongoose";

try {
  await mongoose.connect(
    "mongodb+srv://ammuhAdmin:gdFEaryLV3Zi9Ufg@queue-project.gd784.mongodb.net/queueDb?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("MongoDB Successful");
} catch (error) {
  console.log("MongoDB Failed");
  process.exit(1);
}

dotenv.config({ path: "./config.env" });
const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/queues", queuesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
