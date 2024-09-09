import Layout from "antd/es/layout";

const AntFooter = () => {
  const { Footer } = Layout;
  return (
    <Footer style={{ textAlign: "center" }}>
      Выполнено{" "}
      <a href="https://t.me/Otec_S" target="_blank" rel="noopener noreferrer">
        Сергеем Григорашем
      </a>{" "}
      09.09.2024
    </Footer>
  );
};

export default AntFooter;
