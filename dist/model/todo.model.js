"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeTodoModel = initializeTodoModel;
const mongoose_1 = require("mongoose");
const data_source_1 = __importDefault(require("../database/data-source"));
const TodoSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
});
const TodoModel = new mongoose_1.Mongoose().model("Todo", TodoSchema);
function initializeTodoModel() {
    if (TodoModel.db.readyState === 0 && data_source_1.default.client) {
        data_source_1.default.collectionExists("todos").then(async (exists) => {
            if (!exists) {
                await data_source_1.default.createCollection("todos");
                console.log("Todos collection created");
            }
            else {
                console.log("Todos collection already exists");
            }
        });
    }
}
exports.default = TodoModel;
//# sourceMappingURL=todo.model.js.map