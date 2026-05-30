import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from "cors";
import contactRoute from "./routes/contactRoute.js";

const app = express()
dotenv.config()
const PORT = process.env.PORT || 4001
const URI = process.env.MONGODB_URI
//connecting to database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();


app.use(cors());
app.use(express.json());
app.use("/api", contactRoute);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})