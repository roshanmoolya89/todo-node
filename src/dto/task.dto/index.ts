import { ApiResponseDto } from "..";
import { TaskDocument } from "../../model/todo.model";

export type TaskFilterDtoType = {
  isCompleted?: boolean;
  sortBy?: "completed" | "id" | "createdAt" | "title";
  sortOrder?: "asc" | "desc";
};

export type CreateTaskDto = {
  title: string;
  completed?: boolean;
};

export type UpdateTaskDto = {
  title?: string;
  completed?: boolean;
};

export class TaskFilterDto implements TaskFilterDtoType {}

export function TaskResponseDto(message: string, task: TaskDocument) {
  return ApiResponseDto<TaskDocument>(message, task);
}

export function TaskListResponseDto(message: string, tasks: TaskDocument[]) {
  return ApiResponseDto<TaskDocument[]>(message, tasks);
}
