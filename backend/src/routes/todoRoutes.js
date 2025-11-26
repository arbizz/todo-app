import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleComplete,
  getCompleted,
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id/complete", toggleComplete);
router.get("/completed", getCompleted);

export default router;
