export interface IEmployee {
  id: number;
  name: string;
  isArchive: boolean;
  role: string;
  phone: string;
  birthday: string;
}

export type EmployeeState = IEmployee[];

export enum EmployeeRole {
  Waiter = "waiter",
  Cook = "cook",
  Driver = "driver",
}
