import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (
    error &&
    error.status &&
    error.status === 401 &&
    error.code &&
    error.code === "credentials_required"
  ) {
    response.status(error.status).json({ message: "Requires authentication" });

    return;
  }

  if (error && error.status && error.status === 401) {
    response.status(error.status).json({ message: "Bad credentials" });

    return;
  }

  if (error && error.statusCode && error.statusCode === 403) {
    response.status(error.statusCode).json({ message: "Permission denied" });

    return;
  }

  const status = error.statusCode || error.code || 500;
  const message = error.message || "internal error";

  response.status(status).json({ message });
};
