"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_service_1 = require("../services/todo.service");
const todos = (0, express_1.Router)();
const todoService = new todo_service_1.TodoService();
todos.get("/", (req, res) => {
    const data = todoService.getAllTodos();
    res.send(data);
});
todos.post("/", (req, res) => {
    try {
        const todo = todoService.createTodo(req.body);
        res.send(todo);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.default = todos;
//# sourceMappingURL=todos.js.map