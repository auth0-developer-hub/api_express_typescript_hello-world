import { Message } from "../models/message";

export const getPublicMessage = (): Message => {
  return {
    metadata: {
      api: "api_express_typescript_hello-world",
      branch: "basic-authorization",
    },
    text: "This is a public message.",
  };
};

export const getProtectedMessage = (): Message => {
  return {
    metadata: {
      api: "api_express_typescript_hello-world",
      branch: "basic-authorization",
    },
    text: "This is a protected message.",
  };
};

export const getAdminMessage = (): Message => {
  return {
    metadata: {
      api: "api_express_typescript_hello-world",
      branch: "basic-authorization",
    },
    text: "This is an admin message.",
  };
};
