import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db";
import router from "./routers/router";
import cors from "cors";
dotenv.config();

const app = express();

// Connect to Database
connectDB();

// Parse request body
app.use(express.json());

// CORS
app.use(cors({ origin: process.env.CLIENT_URL }));

// Configure routes
app.use("/", router);

// Initiate server
const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  console.log(err ? `Error: ${err}` : `🚀 Server ready at PORT ${PORT}`);
});
