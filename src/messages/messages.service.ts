import { Message } from "./message.model";

export const getPublicMessage = (): Message => {
  return {
    text: "This is a public message.",
  };
};

export const getProtectedMessage = (): Message => {
  return {
    text: "This is a protected message.",
  };
};

export const getAdminMessage = (): Message => {
  return {
    text: "This is an admin message.",
  };
};
