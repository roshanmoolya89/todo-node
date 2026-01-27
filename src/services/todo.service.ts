import { ApiResponseDto } from "../dto";
import {
  TaskFilterDtoType,
  TaskListResponseDto,
  TaskResponseDto,
} from "../dto/task.dto";
import TaskModel, { Task, TaskDocument } from "../model/todo.model";

export class TodoService {
  public static instance: TodoService;

  static getInstance() {
    if (!TodoService.instance) {
      TodoService.instance = new TodoService();
    }
    return TodoService.instance;
  }

  async createTodo(todo: Task): Promise<ApiResponseDto<TaskDocument>> {
    try {
      const newTodo = new TaskModel(todo);
      return TaskResponseDto("Task Created Successfully", await newTodo.save());
    } catch (error: any) {
      return Promise.reject(error);
    }
  }

  async getAllTodos(
    taskFilter: TaskFilterDtoType,
  ): Promise<ApiResponseDto<TaskDocument[]>> {
    const filter: any = {};
    if (taskFilter.isCompleted !== undefined) {
      filter.completed = taskFilter.isCompleted;
    }
    if (taskFilter.sortBy) {
      const sort: any = {};
      sort[taskFilter?.sortBy || "id"] =
        taskFilter.sortOrder === "desc" ? -1 : 1;
      const response: TaskDocument[] = await TaskModel.find(filter).sort(sort);
      return TaskListResponseDto("Tasks Fetch Successfully", response);
    }
    const response: TaskDocument[] = await TaskModel.find(filter);
    return TaskListResponseDto("Tasks Fetch Successfully", response);
  }

  async getTodoById(id: string): Promise<Task | null> {
    return await TaskModel.findById(id);
  }

  async updateTodo(id: string, todo: Task): Promise<Task | null> {
    return await TaskModel.findByIdAndUpdate(id, todo, { new: true });
  }

  async deleteTodo(id: string): Promise<Boolean | null> {
    return await TaskModel.findByIdAndDelete(id);
  }
}
