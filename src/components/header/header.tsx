import { Layout } from "antd";
import logo from "../../assets/logoPizzaSoft.png";
import { Link } from "react-router-dom";
import Title from "antd/es/typography/Title";
import "./header.scss";
import "../../variables.scss";

const AntHeader = () => {
  const { Header } = Layout;

  return (
    <Link to="/">
      <Header className="antheader">
        <img src={logo} alt="PizzaSoft" className="antheader-logo" />
        <Title level={4} className="antheader-title page-title">
          Тестовое задание для компании "PizzaSoft"
        </Title>
      </Header>
    </Link>
  );
};

export default AntHeader;
