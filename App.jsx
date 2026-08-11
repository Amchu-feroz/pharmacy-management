import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Inventory from "./Inventory";
import Sales from "./Sales";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;