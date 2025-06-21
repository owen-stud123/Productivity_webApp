// This file contains the controller functions for handling task-related requests.
// Description: Task controller for managing tasks in the application
const taskModel = require("../models/taskmodel");

const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks." });
  }
};

const createTask = async (req, res) => {
  try {
    const { task } = req.body;
    if (!task) {
      return res.status(400).json({ error: "Task text is required." });
    }
    const newTask = await taskModel.addTask(task);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task." });
  }
};

const removeTask = async (req, res) => {
  try {
    const { id } = req.params;
    await taskModel.deleteTask(id);
    res.json({ message: "Task deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task." });
  }
};

module.exports = {
  getTasks,
  createTask,
  removeTask,
};
