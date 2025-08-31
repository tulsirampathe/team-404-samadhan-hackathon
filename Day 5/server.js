
const express = require("express");
const app = express();

app.use(express.json());

// Dummy list of students
let students = [
  { id: 1, name: "Tulsiram Pathe", course: "Computer Science & Engineering" },
  { id: 2, name: "Priya Singh", course: "Information Technology" },
  { id: 3, name: "Prince Arya", course: "Computer Science & Engineering" }
];

// GET route -> return list of students
app.get("/students", (req, res) => {
  res.json(students);
});

// POST route -> add new student
app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    course: req.body.course
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(3000, () => {
  console.log("Express server running at http://localhost:3000");
});
