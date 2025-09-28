import React from "react";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";


export default function App() {
return (
<div className="min-h-screen bg-white text-gray-900">
  <Navbar />
  
  <main className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-0 px-4 sm:px-6 lg:px-0 max-w-8xl mx-auto min-h-[calc(100vh-4rem)] w-full overflow-x-hidden">
    <Feed />
    <Sidebar />
  </main>
  
</div>
);
}