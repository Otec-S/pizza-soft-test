import React from "react";
import { Checkbox, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { EmployeeRole, IEmployee } from "../../types/employeesTypes";
import convertToISO from "../../helpers/convertToISO";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

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
    // filters: [
    //   {
    //     text: "Joe",
    //     value: "Joe",
    //   },
    //   {
    //     text: "Jim",
    //     value: "Jim",
    //   },
    //   {
    //     text: "Submenu",
    //     value: "Submenu",
    //     children: [
    //       {
    //         text: "Green",
    //         value: "Green",
    //       },
    //       {
    //         text: "Black",
    //         value: "Black",
    //       },
    //     ],
    //   },
    // ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    // onFilter: (value, record) => record.name.indexOf(value as string) === 0,
    // defaultSortOrder: "descend",
    defaultSortOrder: "ascend",
    // sorter: (a, b) => a.name.length - b.name.length,

    // сортировка по алфавиту
    sorter: (a, b) => a.name.localeCompare(b.name),

    // sortDirections: ["descend"],
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
  },
  {
    title: "Телефон",
    dataIndex: "phone",
  },
  {
    title: "В архиве",
    dataIndex: "isArchive",
    render: (isArchive) =>
      isArchive ? (
        <Checkbox defaultChecked disabled />
      ) : (
        <Checkbox defaultChecked={false} disabled />
      ),
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

// const onChange: TableProps<DataType>["onChange"] = (
//   pagination,
//   filters,
//   sorter,
//   extra
// ) => {
//   console.log("params", pagination, filters, sorter, extra);
// };

const EmployeesList: React.FC = () => {
  const employees = useSelector((state: RootState) => state.employees);

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={employees}
      // onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default EmployeesList;
