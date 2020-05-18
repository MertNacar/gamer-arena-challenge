import React from "react";
import Disputes from "./pages/Disputes";
import Navbar from "./components/General/Navbar";
import Sidebar from "./components/General/Sidebar";
function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Sidebar />
        <Disputes />
      </div>
    </>
  );
}

export default App;
