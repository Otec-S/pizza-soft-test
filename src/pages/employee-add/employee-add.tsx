import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, Select, Space } from "antd";
import { addEmployee } from "../../store/employeesSlice";
import { IEmployee } from "../../types/employeesTypes";
import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const EmployeeAdd: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = (values: IEmployee) => {
    const newEmployee = {
      ...values,
      id: Date.now(),
    };
    // TODO: убрать?
    console.log("newEmployee:", newEmployee);
    dispatch(addEmployee(newEmployee));
    navigate("/");
  };

  const onReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    form.setFieldsValue({
      isArchive: false,
    });
  }, [form]);

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        name="name"
        label="Имя сотрудника"
        rules={[
          { required: true, message: "Пожалуйста, введите имя и фамилию" },
        ]}
      >
        <Input autoFocus allowClear />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Телефон"
        rules={[
          {
            pattern: new RegExp(/^\+7 \(\d{3}\) \d{3}-\d{4}$/),
            message: "Введите в формате +7 (777) 777-7777",
          },
          { required: true, message: "Пожалуйста, введите номер телефона" },
        ]}
      >
        <Input.Password allowClear />
      </Form.Item>

      <Form.Item
        name="birthday"
        label="Дата рождения"
        rules={[
          {
            pattern: new RegExp(
              /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$/
            ),
            message: "Введите корректную дату рождения в формате ДД.ММ.ГГГГ",
          },
          { required: true, message: "Пожалуйста, введите дату рождения" },
        ]}
      >
        <Input.Password allowClear />
      </Form.Item>

      <Form.Item
        name="role"
        label="Должность"
        rules={[{ required: true, message: "Пожалуйста, выберите должность" }]}
      >
        <Select placeholder="Выберите должность" allowClear>
          <Option value="cook">Повар</Option>
          <Option value="waiter">Официант</Option>
          <Option value="driver">Водитель</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Статус" name="isArchive" valuePropName="checked">
        <Checkbox>В архиве</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Очистить поля
          </Button>
          <Button type="link" htmlType="button" onClick={() => navigate("/")}>
            Назад
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default EmployeeAdd;
