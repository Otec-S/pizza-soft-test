import { Layout } from "antd";
import logo from "../../assets/logoPizzaSoft.png";
import { Link } from "react-router-dom";
import Title from "antd/es/typography/Title";

const AntHeader = () => {
  const { Header } = Layout;

  return (
    <Link to="/">
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
        {/* <span style={{ color: "white" }}>
          Тестовое задание для компании "PizzaSoft"
        </span> */}
        <Title level={4} style={{ color: "white", margin: "0" }}>
          Тестовое задание для компании "PizzaSoft"
        </Title>
      </Header>
    </Link>
  );
};

export default AntHeader;
