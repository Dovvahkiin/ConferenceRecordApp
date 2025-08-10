import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PORT } from "./config/env.js";

dotenv.config();

const app = express();
const port = PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/hello", (req, res) => res.send(alert("Poyy")));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
