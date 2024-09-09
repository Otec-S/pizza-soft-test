import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import logo from "../../assets/logoPizzaSoft.png";

const { Header, Content, Footer } = Layout;

// const items = new Array(15).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));

const LayoutGeneral: React.FC = () => {
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
        {/* <div className="demo-logo" /> */}
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        /> */}
      </Header>
      <Content style={{ padding: "0 48px" }}>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          // TODO: SASS ?
          style={{
            background: colorBgContainer,
            minHeight: "calc(100vh - 147px)",
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Выполнено Сергеем Григорашем (@Otec_S) 09.09.2024
      </Footer>
    </Layout>
  );
};

export default LayoutGeneral;
