import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminScreen from "./screens/AdminScreen";
import AgentScreen from "./screens/AgentScreen";
import ProfilingScreen from "./screens/ProfilingScreen";
import CollectorScreen from "./screens/CollectorScreen";
import CollectionScreen from "./screens/CollectionScreen";
import ReportScreen from "./screens/ReportScreen";
import LoginScreen from "./screens/LoginScreen";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/admin" element={<AdminScreen />} />
          <Route path="/agent" element={<AgentScreen />} />
          <Route path="/profiling" element={<ProfilingScreen />} />
          <Route path="/collector" element={<CollectorScreen />} />
          <Route path="/collection" element={<CollectionScreen />} />
          <Route path="/report" element={<ReportScreen />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
