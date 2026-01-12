import compression from "compression";
import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import db from "./database/data-source";
import requestTimeline from "./middleware/requestTimeline";
import routes from "./routes";

global.db = db;

const app: Application = express();
const isProduction = process.env.NODE_ENV === "production";

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(morgan(isProduction ? "combined" : "dev"));
app.use(requestTimeline);

// Basic route
app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Welcome to the Todo API" });
});

// API routes
app.use("/api", routes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: `Route ${req.path} not found` });
});

// Global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

export default app;
