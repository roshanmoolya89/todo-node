import { NextFunction, Request, Response } from "express";

class ApiError extends Error {
  status: number;
  timestamp: Date;
  constructor(message: string, status: number, timestamp: Date = new Date()) {
    super(message);
    this.status = status;
    this.timestamp = timestamp;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

class ValidationError extends ApiError {
  fields?: any;
  constructor(message: string, fields?: any) {
    super(message, 400);
    this.fields = fields;
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, 404);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

class RouteNotFoundError extends ApiError {
  endpoint: string;
  constructor(message: string, endpoint: string) {
    super(message, 404);
    this.endpoint = endpoint;
    Object.setPrototypeOf(this, RouteNotFoundError.prototype);
  }
}

const globalErrorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (res.headersSent) {
    return _next(err);
  }
  console.error(err.stack);

  let response: any = {
    status: err?.status || 500,
    errorType: err?.constructor?.name || "InternalServerError",
    message: err.message || "Internal Server Error",
    timestamp: err.timestamp || new Date(),
  };

  if (err instanceof ValidationError && err.fields) {
    response = { ...response, fields: err.fields };
  }

  //handle Mongoose Errors
  if (err.name === "ValidationError" && err.errors) {
    const fields: any = {};
    for (const key in err.errors) {
      fields[key] = err.errors[key].message;
    }
    response = {
      ...response,
      status: 400,
      errorType: "ValidationError",
      fields,
    };
  }

  if (err instanceof RouteNotFoundError) {
    response = { ...response, endpoint: err.endpoint };
  }

  res.status(err?.status || 500).json(response);
};

export {
  ApiError,
  globalErrorHandler,
  NotFoundError,
  RouteNotFoundError,
  ValidationError,
};
