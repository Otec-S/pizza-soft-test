import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EmployeesList from "./pages/employees-list/employees-list";
// import EmployeeEdit from "./pages/employee-edit/employee-edit";
import EmployeeAdd from "./pages/employee-add/employee-add";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeesList />} />
        {/* <Route path="/employee-edit/:id" element={<EmployeeEdit />} /> */}
        <Route path="/employee-add" element={<EmployeeAdd />} />
      </Routes>
    </Router>
  );
}

export default App;
