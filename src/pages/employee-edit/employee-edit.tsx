import React from "react";
import {
  Button,
  Checkbox,
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  Select,
  Space,
} from "antd";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const EmployeeEdit: React.FC = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: "Hello world!", gender: "male" });
  };

  const onBirthdayChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(dateString);
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="name" label="Имя сотрудника">
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
        ]}
      >
        <Input.Password allowClear />
      </Form.Item>

      <Form.Item name="role" label="Должность">
        <Select
          placeholder="Выберите должность"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="cook">Повар</Option>
          <Option value="waiter">Официант</Option>
          <Option value="driver">Водитель</Option>
        </Select>
      </Form.Item>

      {/* <Form.Item name="isArchive" label="Статус">
        <Input />
      </Form.Item> */}

      <Form.Item label="Статус" name="isArchive" valuePropName="checked">
        <Checkbox>В архиве</Checkbox>
      </Form.Item>

      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.gender !== currentValues.gender
        }
      >
        {({ getFieldValue }) =>
          getFieldValue("gender") === "other" ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Очистить поля
          </Button>
          <Button
            type="link"
            htmlType="button"
            // onClick={onFill}
          >
            Назад
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default EmployeeEdit;
