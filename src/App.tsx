import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employee-edit/:id" element={<EmployeeEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
