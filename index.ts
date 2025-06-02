import express from "express";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
    res.send(`Hello ${process.env.SREE}`);
})

app.listen(3000, () => { console.log("Listening on localhost:3000"); });