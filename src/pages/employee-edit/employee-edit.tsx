import React, { useEffect } from "react";
import { editEmployee } from "../../store/employeesSlice";
import { IEmployee } from "../../types/employeesTypes";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "../../components/employee-form/employee-form";
import "../../variables.scss";

const EmployeeEdit: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const employees = useAppSelector((state) => state.employeesReducer);
  const employee = employees.find((employee) => employee.id === Number(id));

  const initialValues = employee
    ? {
        name: employee.name,
        phone: employee.phone,
        birthday: employee.birthday,
        role: employee.role,
        isArchive: employee.isArchive,
      }
    : {
        name: "",
        phone: "",
        birthday: "",
        role: "",
        isArchive: false,
      };

  const onFinish = (values: IEmployee) => {
    const updatedEmployee = {
      ...values,
      id: Number(id),
    };
    dispatch(editEmployee(updatedEmployee));
    navigate("/pizza-soft-test");
  };

  useEffect(() => {
    if (!employee) {
      navigate("/404", { replace: true });
    }
  }, [employee, navigate]);

  if (!employee) return null;

  return (
    <>
      <h1 className="page-title">Изменение данных о сотрудниках</h1>
      <EmployeeForm onFinish={onFinish} initialValues={initialValues} />
    </>
  );
};

export default EmployeeEdit;
