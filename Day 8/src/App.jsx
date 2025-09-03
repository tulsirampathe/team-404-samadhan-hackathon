import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);   
  const [newTask, setNewTask] = useState(""); 

  const addTask = () => {
    if (newTask.trim() === "") return; 
    setTasks([...tasks, newTask]); 
    setNewTask("");
  };

  // Remove task
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">To-Do List</h2>

        
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder="Enter a task..."
            className="flex-1 px-3 py-2 border rounded-lg"
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
          >
            Add
          </button>
        </div>

       
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 p-2 rounded-lg shadow-sm"
            >
              <span>{task}</span>
              <button
                onClick={() => removeTask(index)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

      
        {tasks.length === 0 && (
          <p className="text-gray-500 text-center mt-4">No tasks yet 🙂</p>
        )}
      </div>
    </div>
  );
}

export default App;
