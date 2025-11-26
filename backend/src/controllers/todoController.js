import { Todo } from "../models/Todo.js";
import { Completed } from "../models/Completed.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title, category } = req.body;

    const todo = await Todo.create({
      title,
      category,
    });

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!todo) return res.status(404).json({ message: "Todo not found" });

    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) return res.status(404).json({ message: "Todo not found" });

    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const toggleComplete = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) return res.status(404).json({ message: "Todo not found" });

    await Completed.create({
      title: todo.title,
      category: todo.category,
    });

    await Todo.findByIdAndDelete(req.params.id);

    res.json({ message: "Todo moved to completed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCompleted = async (req, res) => {
  try {
    const completedTasks = await Completed.find().sort({ createdAt: -1 });

    res.json(completedTasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};