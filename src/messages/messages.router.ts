import express from "express";
import { getAdminMessage, getProtectedMessage, getPublicMessage, } from "./messages.service";

export const messagesRouter = express.Router();

messagesRouter.get("/public", (req, res) => {
  const message = getPublicMessage();
  
  res.status(200).json(message);
});

messagesRouter.get("/protected", (req, res) => {
  const message = getProtectedMessage();
  
  res.status(200).json(message);
});

messagesRouter.get("/admin", (req, res) => {
  const message = getAdminMessage();
  
  res.status(200).json(message);
});
