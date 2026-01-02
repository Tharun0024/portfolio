// src/App.tsx - SIMPLIFIED ROUTING WITH CONTACT
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";     // Your Home page
import Resume from "./pages/resume";   // Resume page
import Contact from "./pages/contact"; // ✅ Added Contact

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />  // ✅ Added Contact route
    </Routes>
  );
}

export default App;
