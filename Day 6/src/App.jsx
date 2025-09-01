import React from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div 
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        width: "100%", 
        height: "100vh",   
        gap: "20px"
      }}
    >
      <ProfileCard 
        name="Tulsiram Pathe" 
        age={21} 
        course="Computer Science" 
        college="SISTec Bhopal" 
      />
      <ProfileCard 
        name="Pawan Tiwari" 
        age={22} 
        course="Information Technology" 
        college="RGPV Bhopal" 
      />
    </div>
  );
}

export default App;
