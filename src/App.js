import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SystemCloud from "./componants/SystemCloud";
import Demo from "./componants/Demo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="SystemCloud" index element={<SystemCloud />} />
        <Route path="/Demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
