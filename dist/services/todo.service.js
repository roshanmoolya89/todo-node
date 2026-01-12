"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const todo_model_1 = __importDefault(require("../model/todo.model"));
class TodoService {
    async createTodo(todo) {
        const newTodo = new todo_model_1.default(todo);
        return await newTodo.save();
    }
    async getAllTodos() {
        return await todo_model_1.default.find();
    }
    async getTodoById(id) {
        return await todo_model_1.default.findById(id);
    }
    async updateTodo(id, todo) {
        return await todo_model_1.default.findByIdAndUpdate(id, todo, { new: true });
    }
    async deleteTodo(id) {
        return await todo_model_1.default.findByIdAndDelete(id);
    }
}
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map