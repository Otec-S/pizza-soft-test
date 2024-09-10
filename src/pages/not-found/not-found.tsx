import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Извините, такой страницы у нас нет"
      extra={
        <Button type="primary" onClick={() => navigate("/pizza-soft-test")}>
          Домой
        </Button>
      }
    />
  );
};

export default NotFound;
