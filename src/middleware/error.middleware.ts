import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.statusCode || error.code || 500;
  const message = error.message || "internal error";

  response.status(status).json({ message });
};
