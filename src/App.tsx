// src/App.tsx - ADD TOAST PROVIDER
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";  
import Index from "./pages/Index";
import Resume from "./pages/resume";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />  
    </>
  );
}
