// File: backend/routes/taskRoutes.js
// Description: This file defines the routes for task management in the application.
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.getTasks);
router.post("/", taskController.createTask);
router.delete("/:id", taskController.removeTask);

module.exports = router;
