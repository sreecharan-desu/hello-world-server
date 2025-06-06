import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017");
        console.log("Connected to MongoDB");
    } catch (e) {
        console.error("Failed to connect to MongoDB", e);
    }
};

connect();

app.get("/", (_req, res) => {
    res.send(`Hello ${process.env.SREE}`);
});

app.listen(3001, () => {
    console.log("Listening on http://localhost:3001");
});
