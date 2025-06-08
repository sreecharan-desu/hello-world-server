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
        // the mongo container name is "mongoapp" so ( mongoapp instead of localhost )
        await mongoose.connect("mongodb://mongoapp:27017/myDB");
        console.log("Connected to MongoDB");
    } catch (e) {
        console.error("Failed to connect to MongoDB", e);
    }
};

connect();

app.get("/", (_req, res) => {
    res.send(`Hello ${process.env.SREE}`);
});

app.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
});
