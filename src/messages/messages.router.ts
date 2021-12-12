import express from "express";
import { checkJwt } from "../middleware/check-jwt.middleware";
import { checkPermissions } from "../middleware/check-permissions.middleware";
import { AdminMessagesPermissions } from "./messages-permissions";
import {
  getAdminMessage,
  getProtectedMessage,
  getPublicMessage,
} from "./messages.service";

export const messagesRouter = express.Router();

messagesRouter.get("/public", (req, res) => {
  const message = getPublicMessage();

  res.status(200).json(message);
});

messagesRouter.get("/protected", checkJwt, (req, res) => {
  const message = getProtectedMessage();

  res.status(200).json(message);
});

messagesRouter.get(
  "/admin",
  checkJwt,
  checkPermissions(AdminMessagesPermissions.Read),
  (req, res) => {
    const message = getAdminMessage();

    res.status(200).json(message);
  }
);
