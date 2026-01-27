import { Document, Schema } from "mongoose";
import db from "../database/data-source";

export type Task = {
  title: string;
  completed: boolean;
};

export type TaskDocument = Task & Document;

const TaskSchema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const TaskModel = db.client!.model<TaskDocument>("Task", TaskSchema);

export default TaskModel;
