import { Router } from "express";
import swaggerRoutes from "./swagger";
import tasksRouter from "./tasks";

const routes = Router();

routes.use("/tasks", tasksRouter);
routes.use("/swagger", swaggerRoutes);

export default routes;
