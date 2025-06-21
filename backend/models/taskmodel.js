// This module defines functions to interact with the tasks table in the database.
// Description: Task model for managing tasks in the database
const db = require("../config/db");

const getAllTasks = async () => {
  const [rows] = await db.query("SELECT * FROM tasks ORDER BY id DESC");
  return rows;
};

const addTask = async (taskText) => {
  const [result] = await db.query("INSERT INTO tasks (task) VALUES (?)", [taskText]);
  return { id: result.insertId, task: taskText };
};

const deleteTask = async (taskId) => {
  await db.query("DELETE FROM tasks WHERE id = ?", [taskId]);
};

module.exports = {
  getAllTasks,
  addTask,
  deleteTask,
};
