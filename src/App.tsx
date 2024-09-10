import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
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
        <Content className="app-content">
          <main
            className="app-inner-content"
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/pizza-soft-test" element={<EmployeesList />} />
              <Route
                path="/pizza-soft-test/employee-edit/:id"
                element={<EmployeeEdit />}
              />
              <Route
                path="/pizza-soft-test/employee-add"
                element={<EmployeeAdd />}
              />
              <Route path="/pizza-soft-test/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Content>
        <AntFooter />
      </Layout>
    </Router>
  );
}

export default App;
