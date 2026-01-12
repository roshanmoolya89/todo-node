import { Schema } from "mongoose";
import db from "../database/data-source";

export type Task = {
  title: string;
  completed: boolean;
};

const TaskSchema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const TaskModel = db.client!.model("Task", TaskSchema);

export default TaskModel;
