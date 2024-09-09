import React from "react";
import { Button, Checkbox, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { EmployeeRole, IEmployee } from "../../types/employeesTypes";
import convertToISO from "../../helpers/convertToISO";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }

const columns: TableColumnsType<IEmployee> = [
  {
    title: "Имя",
    dataIndex: "name",
    showSorterTooltip: { target: "full-header" },
    defaultSortOrder: "ascend",
    // сортировка по алфавиту
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (name, record) => (
      <Link to={`/employee-edit/${record.id}`}>{name}</Link>
    ),
  },
  {
    title: "Дата рождения",
    dataIndex: "birthday",
    defaultSortOrder: "descend",
    // sorter: (a, b) =>
    //   new Date(a.birthday).getTime() - new Date(b.birthday).getTime(),
    // render: (date) => new Date(date).toLocaleDateString(),
    sorter: (a, b) =>
      new Date(convertToISO(a.birthday)).getTime() -
      new Date(convertToISO(b.birthday)).getTime(),
    // render: (date: string) => new Date(convertToISO(date)).toLocaleDateString(),
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
  // {
  //   title: "Age",
  //   dataIndex: "age",
  //   defaultSortOrder: "descend",
  //   sorter: (a, b) => a.age - b.age,
  // },
  // {
  //   title: "Address",
  //   dataIndex: "address",
  //   filters: [
  //     {
  //       text: "London",
  //       value: "London",
  //     },
  //     {
  //       text: "New York",
  //       value: "New York",
  //     },
  //   ],
  //   onFilter: (value, record) => record.address.indexOf(value as string) === 0,
  // },
];

// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "4",
//     name: "Jim Red",
//     age: 32,
//     address: "London No. 2 Lake Park",
//   },
// ];

const onChange: TableProps<IEmployee>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const EmployeesList: React.FC = () => {
  // const employees = useSelector((state: RootState) => state.employees);
  const employees = useAppSelector((state) => state.employeesReducer);

  const navigate = useNavigate();

  const handleEmployeeButtonClick = () => {
    navigate("/employee-add");
  };

  return (
    <>
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
