import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-8 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Counter</h2>
        <p className="text-2xl mb-4">{count}</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow"
          >
            -
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow"
          >
            +
          </button>
        </div>
      </div>

      
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">Live Text Preview</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="w-full px-3 py-2 border rounded-lg mb-4"
        />
        <p className="text-gray-700">
          <strong>Preview:</strong> {text}
        </p>
      </div>
    </div>
  );
}

export default App;
