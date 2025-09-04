import React, { useState, useEffect } from "react";

function App() {
  const [students, setStudents] = useState([]);

  // Fetch students from backend
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🎓 Student Directory</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white p-6 rounded-2xl shadow-lg w-72"
          >
            <h2 className="text-xl font-semibold">{student.name}</h2>
            <p className="text-gray-600">Age: {student.age}</p>
            <p className="text-gray-600">Course: {student.course}</p>
          </div>
        ))}
      </div>

      {students.length === 0 && (
        <p className="text-gray-500 mt-6">Loading students...</p>
      )}
    </div>
  );
}

export default App;
