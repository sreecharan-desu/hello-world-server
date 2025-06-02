import express from "express";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(_req,res)=>{
    res.send("Hello wolrd");
})


app.listen(3000,()=>{
    console.log("Listening on localhost:3000");
});