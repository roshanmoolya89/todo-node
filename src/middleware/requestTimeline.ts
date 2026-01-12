import { NextFunction, Request, Response } from "express";

declare global {
  namespace Express {
    interface Locals {
      requestStartedAt?: number;
    }
  }
}

const requestTimeline = (req: Request, res: Response, next: NextFunction) => {
  const startedAt = Date.now();
  res.locals.requestStartedAt = startedAt;

  console.log(
    `[timeline] ${req.method} ${req.originalUrl} began at ${startedAt}`
  );

  res.on("finish", () => {
    const duration = Date.now() - startedAt;
    console.log(
      `[timeline] ${req.method} ${req.originalUrl} finished in ${duration}ms`
    );
  });

  next();
};

export default requestTimeline;
