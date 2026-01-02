// src/App.tsx - SIMPLIFIED ROUTING (Your exact structure)
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";  // Your Home page
import Resume from "./pages/resume";  // Resume page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
