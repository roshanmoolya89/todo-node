"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const todo_model_1 = require("../model/todo.model");
class dataScource {
    constructor() {
        this.connectionString = "mongodb://root:example@localhost:27017/?authSource=admin";
        this.dbName = "mydatabase";
        try {
            this.client = new mongoose_1.Mongoose();
            this.client
                .connect(this.connectionString)
                .then(() => {
                console.log("Connected to MongoDB");
                (0, todo_model_1.initializeTodoModel)();
            })
                .catch((err) => {
                console.error("MongoDB connection error", err);
            });
        }
        catch (error) {
            console.error("Error initializing MongoDB client", error);
        }
    }
    static getInstance() {
        if (!dataScource.instance) {
            dataScource.instance = new dataScource();
        }
        return dataScource.instance;
    }
    collectionExists(collectionName) {
        if (!this.client ||
            !this.client?.connection ||
            !this.client?.connection.db) {
            throw new Error("MongoDB client is not initialized");
        }
        return this.client?.connection.db
            .listCollections({ name: collectionName })
            .hasNext();
    }
    async createCollection(collectionName) {
        if (!this.client ||
            !this.client?.connection ||
            !this.client?.connection.db) {
            throw new Error("MongoDB client is not initialized");
        }
        const collection = await this.client?.connection.db.createCollection(collectionName);
        return collection !== null;
    }
}
const dataScourceClient = dataScource.getInstance();
exports.default = dataScourceClient;
//# sourceMappingURL=data-source.js.map