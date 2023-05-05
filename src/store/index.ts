import { Tag, Task } from "./types";
import { createStore } from "vuex";

interface StateType {
  tasks: Task[];
  tags: Tag[];
}

const defaultTasks: Task[] = [
  {
    name: "Complete Vue JS Demo Project",
    created: new Date(),
    status: "Todo",
    tags: [Tag.Work],
  },
  {
    name: "Study English",
    created: new Date(),
    status: "Completed",
    tags: [Tag.Personal],
  },
  {
    name: "Study Vue",
    created: new Date(),
    status: "Completed",
    tags: [Tag.Personal, Tag.Work],
  },
  {
    name: "Draft",
    created: new Date(),
    status: "Deleted",
    tags: [Tag.Sport],
  },
];
const defaultTags: Tag[] = Object.values(Tag);

export default createStore<StateType>({
  state: {
    tasks: defaultTasks,
    tags: defaultTags,
  },
  getters: {
    getTodoTasks: (state) =>
      state.tasks.filter(({ status }) => status === "Todo"),
    getCompletedTasks: (state) =>
      state.tasks.filter(({ status }) => status === "Completed"),
    getDeletedTasks: (state) =>
      state.tasks.filter(({ status }) => status === "Deleted"),
    getTags: (state) => state.tags,
  },
  mutations: {
    addTask: (state, task: Task) => state.tasks.push(task),
    deleteTask(state, task: Task) {
      const taskIndex = state.tasks.findIndex(
        (value) => task.name === value.name
      );
      state.tasks[taskIndex].status = "Deleted";
      state.tasks[taskIndex].deleted = new Date();
    },
    completeTask(state, task) {
      const taskIndex = state.tasks.findIndex(
        (value) => task.name === value.name
      );
      state.tasks[taskIndex].status = "Completed";
      state.tasks[taskIndex].completed = new Date();
    },
    unCompleteTask(state, task) {
      const taskIndex = state.tasks.findIndex(
        (value) => task.name === value.name
      );
      state.tasks[taskIndex].status = "Todo";
      state.tasks[taskIndex].completed = undefined;
    },
  },
  actions: {},
  modules: {},
});
