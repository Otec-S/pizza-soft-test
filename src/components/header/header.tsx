import { Layout } from "antd";
import logo from "../../assets/logoPizzaSoft.png";
import { Link } from "react-router-dom";
import Title from "antd/es/typography/Title";
import "./header.scss";

const AntHeader = () => {
  const { Header } = Layout;

  return (
    <Link to="/">
      <Header className="antheader">
        <img
          src={logo}
          alt="Логотип компании Пицца-Софт"
          className="antheader-logo"
        />
        <Title level={4} className="antheader-title">
          Тестовое задание для компании "PizzaSoft"
        </Title>
      </Header>
    </Link>
  );
};

export default AntHeader;
