import { create } from "./apiHandler";

async function registerUser(credentials) {
  const response = await create({
    resource: "/user/register",
    body: credentials,
  });

  return response;
}

export { registerUser };
