import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(pricess.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongoDB Successful");
  } catch (error) {
    console.log("MongoDB Failed");
    process.exit(1);
  }
};

module.exports = connectDB;
