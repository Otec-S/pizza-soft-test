import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, Select, Space } from "antd";
import { addEmployee } from "../../store/employeesSlice";
import { IEmployee } from "../../types/employeesTypes";
import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "../../components/employee-form/employee-form";

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

  // useEffect(() => {
  //   form.setFieldsValue({
  //     isArchive: false,
  //   });
  // }, [form]);

  const initialValues = {
    name: "",
    phone: "",
    birthday: "",
    role: "",
    isArchive: false,
  };

  return <EmployeeForm onFinish={onFinish} initialValues={initialValues} />;
};

export default EmployeeAdd;
