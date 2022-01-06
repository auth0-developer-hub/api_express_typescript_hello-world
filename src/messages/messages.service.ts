import { Message } from "../models/message";

export const getPublicMessage = (): Message => {
  return {
    api: "api_express_typescript_hello-world",
    branch: "starter",
    text: "No access token required to get this public message.",
  };
};

export const getProtectedMessage = (): Message => {
  return {
    api: "api_express_typescript_hello-world",
    branch: "starter",
    text: "No access token required to get this protected message.",
  };
};

export const getAdminMessage = (): Message => {
  return {
    api: "api_express_typescript_hello-world",
    branch: "starter",
    text: "No access token or role required to get this admin message.",
  };
};
