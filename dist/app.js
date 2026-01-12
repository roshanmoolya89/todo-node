"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const requestTimeline_1 = __importDefault(require("./middleware/requestTimeline"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const isProduction = process.env.NODE_ENV === "production";
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({ origin: true, credentials: true }));
app.use(express_1.default.json({ limit: "1mb" }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, compression_1.default)());
app.use((0, morgan_1.default)(isProduction ? "combined" : "dev"));
app.use(requestTimeline_1.default);
app.get("/", (_req, res) => {
    res.json({ message: "Welcome to the Todo API" });
});
app.use("/api", routes_1.default);
app.use((req, res) => {
    res.status(404).json({ message: `Route ${req.path} not found` });
});
app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
});
exports.default = app;
//# sourceMappingURL=app.js.map