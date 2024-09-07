import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EmployeesList from "./pages/employees-list/employees-list";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeesList />} />
        {/* <Route path="/employee-edit/:id" element={<EmployeeEdit />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
