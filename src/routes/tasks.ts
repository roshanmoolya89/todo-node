import { NextFunction, Request, Response, Router } from "express";
import { TodoService } from "../services/todo.service";
import { NotFoundError } from "../utils/errors";

const tasks = Router();
const todoService = TodoService.getInstance();

tasks.get("/", async (req: Request, res: Response) => {
  const data = await todoService.getAllTodos(req.query);
  res.send(data);
});

// Create a new task
tasks.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await todoService.createTodo(req.body);
    res.send(todo);
  } catch (error: any) {
    next(error);
  }
});

// Get a task by ID
tasks.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await todoService.getTodoById(req.params.id);
    if (todo) {
      res.send(todo);
    } else {
      throw new NotFoundError("Task not found with id " + req.params.id);
    }
  } catch (error: any) {
    next(error);
  }
});

tasks.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await todoService.getTodoById(req.params.id);
    if (!todo) {
      throw new NotFoundError("Task not found with id " + req.params.id);
    }
    const updateTodo = await todoService.updateTodo(req.params.id, req.body);
    if (updateTodo) {
      res.send(updateTodo);
    } else {
      res
        .status(404)
        .send({ message: "Task not found with id " + req.params.id });
    }
  } catch (error: any) {
    next(error);
  }
});

export default tasks;
