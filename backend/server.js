import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) =>
  res.json({ message: "Hello from backend" })
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
