import { NextFunction, Request, Response, Router } from "express";
import { TodoService } from "../services/todo.service";

const tasks = Router();
const todoService = TodoService.getInstance();

tasks.get("/", async (req: Request, res: Response) => {
  const data = await todoService.getAllTodos();
  res.send(data);
});

// Create a new task
tasks.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await todoService.createTodo(req.body);
    res.send(todo);
  } catch (error: any) {
    // res.status(500).send({
    //   message: error.message,
    //   status: 500,
    // });
    next(error);
  }
});

// Get a task by ID
tasks.get("/:id", async (req: Request, res: Response) => {
  try {
    const todo = await todoService.getTodoById(req.params.id);
    if (todo) {
      res.send(todo);
    } else {
      res
        .status(404)
        .send({ message: "Task not found with id " + req.params.id });
    }
  } catch (error: any) {
    res.status(500).send({
      message: error.message,
      status: 500,
    });
  }
});

tasks.put("/:id", async (req: Request, res: Response) => {
  try {
    const updateTodo = await todoService.updateTodo(req.params.id, req.body);
    if (updateTodo) {
      res.send(updateTodo);
    } else {
      res
        .status(404)
        .send({ message: "Task not found with id " + req.params.id });
    }
  } catch (error: any) {}
});

export default tasks;
