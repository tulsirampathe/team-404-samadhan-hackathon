const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: "Tulsiram Pathe", age: 21, course: "CSE" },
  { id: 2, name: "Pawan Tiwari", age: 22, course: "IT" },
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((s) => s.id === id);
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});

app.post("/students", (req, res) => {
  const { name, age, course } = req.body;
  const newStudent = { id: students.length + 1, name, age, course };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age, course } = req.body;
  const studentIndex = students.findIndex((s) => s.id === id);
  if (studentIndex === -1)
    return res.status(404).json({ message: "Student not found" });
  students[studentIndex] = { id, name, age, course };
  res.json(students[studentIndex]);
});

app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const studentIndex = students.findIndex((s) => s.id === id);
  if (studentIndex === -1)
    return res.status(404).json({ message: "Student not found" });
  const deletedStudent = students.splice(studentIndex, 1);
  res.json(deletedStudent[0]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
