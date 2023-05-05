export enum Tag {
  Personal = "Personal",
  Work = "Work",
  Sport = "Sport",
}

export interface Task {
  name: string;
  tags: Tag[];
  status: "Todo" | "Completed" | "Deleted";
  created: Date;
  completed?: Date;
  deleted?: Date;
}
