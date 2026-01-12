import TaskModel, { Task } from "../model/todo.model";

export class TodoService {
  public static instance: TodoService;

  static getInstance() {
    if (!TodoService.instance) {
      TodoService.instance = new TodoService();
    }
    return TodoService.instance;
  }

  async createTodo(todo: Task): Promise<Task> {
    try {
      const newTodo = new TaskModel(todo);
      return await newTodo.save();
    } catch (error: any) {
      return Promise.reject(error);
    }
  }

  async getAllTodos(): Promise<Task[]> {
    return await TaskModel.find();
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
