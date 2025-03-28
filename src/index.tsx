import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Frame } from "./screens/Frame/index.jsx";
import { PowerMonitoring } from "./screens/PowerMonitoring/index.jsx";
import { Reports } from "./screens/Reports/index.jsx";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Frame />} />
        <Route path="/power-monitoring" element={<PowerMonitoring />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  </StrictMode>
);