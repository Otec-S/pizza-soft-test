import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EmployeesList from "./pages/employees-list/employees-list";
import EmployeeEdit from "./pages/employee-edit/employee-edit";
import EmployeeAdd from "./pages/employee-add/employee-add";
import NotFound from "./pages/not-found/not-found";
import { Layout, theme } from "antd";
import logo from "../src/assets/logoPizzaSoft.png";

function App() {
  const { Header, Content, Footer } = Layout;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center", color: "white" }}>
        <img
          src={logo}
          alt="PizzaSoft"
          style={{
            width: "50px",
            height: "50px",
            marginRight: "10px",
            objectFit: "contain",
          }}
        />
        <span style={{ color: "white" }}>
          Тестовое задание для компании "PizzaSoft"
        </span>
      </Header>
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
          <Router>
            <Routes>
              <Route path="/" element={<EmployeesList />} />
              <Route path="/employee-edit/:id" element={<EmployeeEdit />} />
              <Route path="/employee-add" element={<EmployeeAdd />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>{" "}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Выполнено Сергеем Григорашем (@Otec_S) 09.09.2024
      </Footer>
    </Layout>
  );
}

export default App;
