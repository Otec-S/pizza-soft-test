import React from "react";
import { addEmployee } from "../../store/employeesSlice";
import { IEmployee } from "../../types/employeesTypes";
import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "../../components/employee-form/employee-form";
import "../../variables.scss";

const EmployeeAdd: React.FC = () => {
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

  const initialValues = {
    name: "",
    phone: "",
    birthday: "",
    role: "",
    isArchive: false,
  };

  return (
    <>
      <h1 className="page-title">Добавление новых сотрудников</h1>
      <EmployeeForm onFinish={onFinish} initialValues={initialValues} />
    </>
  );
};

export default EmployeeAdd;
