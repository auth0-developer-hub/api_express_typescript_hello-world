import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = 500;
  const message = "Internal Server Error";

  response.status(status).json({ message });
};
