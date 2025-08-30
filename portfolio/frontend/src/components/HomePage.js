import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5">
      <h1>Welcome to Portfolio Builder</h1>
      <p className="mb-5">Create your professional portfolio easily!</p>
      <img src="./MaterialTailwind.webp" alt="Hero image" className="hr_img"/>
    </div>
  );
}

export default HomePage;

