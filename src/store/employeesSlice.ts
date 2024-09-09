import { createSlice } from "@reduxjs/toolkit";
import { EMPLOYEES } from "../const";

const employeesSlice = createSlice({
  name: "employees",
  initialState: EMPLOYEES,
  reducers: {
    addEmployee(state, action) {
      state.push(action.payload);
    },
    // TODO: применить
    editEmployee(state, action) {
      const index = state.findIndex(
        (employee) => employee.id === action.payload.id
      );
      state[index] = action.payload;
    },
  },
});

export const { addEmployee, editEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
