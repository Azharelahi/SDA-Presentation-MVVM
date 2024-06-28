
import { makeAutoObservable } from "mobx";
import Task from "../models/Task";

class TaskViewModel {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTask(title) {
    this.tasks.push(new Task(title));
  }
}

export default new TaskViewModel();
