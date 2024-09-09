import React from "react";
import { Button, Checkbox, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { EmployeeRole, IEmployee } from "../../types/employeesTypes";
import convertToISO from "../../helpers/convertToISO";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import Title from "antd/es/typography/Title";

const columns: TableColumnsType<IEmployee> = [
  {
    title: "Имя",
    dataIndex: "name",
    showSorterTooltip: { target: "full-header" },
    defaultSortOrder: "ascend",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (name, record) => (
      <Link to={`/employee-edit/${record.id}`}>{name}</Link>
    ),
  },
  {
    title: "Дата рождения",
    dataIndex: "birthday",
    defaultSortOrder: "descend",
    sorter: (a, b) =>
      new Date(convertToISO(a.birthday)).getTime() -
      new Date(convertToISO(b.birthday)).getTime(),
  },
  {
    title: "Должность",
    dataIndex: "role",
    render: (role: string) => {
      switch (role) {
        case EmployeeRole.Waiter:
          return "Официант";
        case EmployeeRole.Cook:
          return "Повар";
        case EmployeeRole.Driver:
          return "Водитель";
        default:
          return "Не указано";
      }
    },
    filters: [
      {
        text: "Повар",
        value: "cook",
      },
      {
        text: "Официант",
        value: "waiter",
      },
      {
        text: "Водитель",
        value: "driver",
      },
    ],
    onFilter: (value, record) => record.role.indexOf(value as string) === 0,
  },
  {
    title: "Телефон",
    dataIndex: "phone",
  },
  {
    title: "Статус",
    dataIndex: "isArchive",
    render: (isArchive) =>
      isArchive ? (
        <Checkbox defaultChecked disabled>
          В архиве
        </Checkbox>
      ) : (
        <Checkbox defaultChecked={false} disabled />
      ),
    filters: [
      {
        text: "В архиве",
        value: "true",
      },
      {
        text: "Не в архиве",
        value: "false",
      },
    ],
    onFilter: (value, record) => record.isArchive.toString() === value,
  },
];

// TODO: убрать?
const onChange: TableProps<IEmployee>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const EmployeesList: React.FC = () => {
  const employees = useAppSelector((state) => state.employeesReducer);

  const navigate = useNavigate();

  const handleEmployeeButtonClick = () => {
    navigate("/employee-add");
  };

  return (
    <>
      <Title>Список сотрудников</Title>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={employees}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
      <Space>
        <Button type="primary" onClick={handleEmployeeButtonClick}>
          Добавить сотрудника
        </Button>
      </Space>
    </>
  );
};

export default EmployeesList;
