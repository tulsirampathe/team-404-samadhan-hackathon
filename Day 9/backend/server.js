const express = require("express");
const app = express();
const cors = require("cors")
const PORT = 5000;

app.use(cors());

const students = [
  { id: 1, name: "Tulsiram Pathe", age: 21, course: "CSE" },
  { id: 2, name: "Pawan Tiwari", age: 22, course: "IT" },
  { id: 3, name: "Anjali Sharma", age: 20, course: "ECE" },
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
