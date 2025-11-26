import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
