// Description: Main entry point for the Productivity API server
// This code sets up an Express server with CORS and JSON parsing, and defines routes for task management.
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Productivity API running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
