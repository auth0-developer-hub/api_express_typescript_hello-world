import { Message } from "../models/message";

export const getPublicMessage = (): Message => {
  return {
    api: "api_express_typescript_hello-world",
    branch: "basic-role-based-access-control",
    text: "The secured API doesn't require an access token to share this public message.",
  };
};

export const getProtectedMessage = (): Message => {
  return {
    api: "api_express_typescript_hello-world",
    branch: "basic-role-based-access-control",
    text: "The secured API requires a valid access token to share this protected message.",
  };
};

export const getAdminMessage = (): Message => {
  return {
    api: "api_express_typescript_hello-world",
    branch: "basic-role-based-access-control",
    text: "The secured API requires a valid access token and the read:admin-messages permission to share this admin message.",
  };
};
