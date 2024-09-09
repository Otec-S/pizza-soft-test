import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EmployeesList from "./pages/employees-list/employees-list";
import EmployeeEdit from "./pages/employee-edit/employee-edit";
import EmployeeAdd from "./pages/employee-add/employee-add";
import NotFound from "./pages/not-found/not-found";
import LayoutGeneral from "./components/layout/layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeesList />} />
        {/* FIXME: */}
        <Route path="/layout" element={<LayoutGeneral />} />
        <Route path="/employee-edit/:id" element={<EmployeeEdit />} />
        <Route path="/employee-add" element={<EmployeeAdd />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
