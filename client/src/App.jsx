import React from "react";
import Home from "../pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <Home />
      </div>
    </div>
  );
}
