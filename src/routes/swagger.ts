import { NextFunction, Request, Response, Router } from "express";
import swaggerUi from "swagger-ui-express";
import { APP_URL } from "../constants/env";

const swaggerRoutes = Router();
let swaggerDocument = require(".././assests/swagger.json");

const swaggerDocsJson = {
  ...swaggerDocument,
  servers: [...(swaggerDocument.servers || []), { url: APP_URL + "/api" }],
};

swaggerRoutes.use(
  "/docs",
  (req: Request, res: Response, next: NextFunction) => {
    return res.json(swaggerDocsJson);
  },
);
swaggerRoutes.use(
  "/ui",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocsJson, {
    explorer: true,
    swaggerOptions: {
      urls: [{ url: "/api/swagger/docs", name: "OpenAPI JSON" }],
      urlsPrimaryName: "OpenAPI JSON",
    },
  }),
);

export default swaggerRoutes;
