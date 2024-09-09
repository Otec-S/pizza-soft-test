import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EmployeesList from "./pages/employees-list/employees-list";
import EmployeeEdit from "./pages/employee-edit/employee-edit";
import EmployeeAdd from "./pages/employee-add/employee-add";
import NotFound from "./pages/not-found/not-found";
import { Layout, theme } from "antd";
import AntHeader from "./components/header/header";
import AntFooter from "./components/footer/footer";

function App() {
  const { Content } = Layout;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout>
        <AntHeader />
        <Content style={{ padding: "0 48px" }}>
          <div
            // TODO: SASS ?
            style={{
              background: colorBgContainer,
              minHeight: "calc(100vh - 147px)",
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/" element={<EmployeesList />} />
              <Route path="/employee-edit/:id" element={<EmployeeEdit />} />
              <Route path="/employee-add" element={<EmployeeAdd />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Content>
        <AntFooter />
      </Layout>
    </Router>
  );
}

export default App;
