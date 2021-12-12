import { Message } from "../models/message";

export const getPublicMessage = (): Message => {
  return {
    text: "The API doesn't require an access token to share this message.",
  };
};

export const getProtectedMessage = (): Message => {
  return {
    text: "The API successfully validated your access token.",
  };
};

export const getAdminMessage = (): Message => {
  return {
    text: "The API successfully recognized you as an admin.",
  };
};
