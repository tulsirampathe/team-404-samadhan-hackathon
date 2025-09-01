
import React from "react";

function ProfileCard({ name, age, course, college }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      width: "250px",
      margin: "10px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ color: "#2269b4ff" }}>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>College:</strong> {college}</p>
    </div>
  );
}

export default ProfileCard;
