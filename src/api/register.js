import { create } from "./apiHandler";

async function registerUser(body) {
  const response = await create({
    resource: "/user/register",
    body,
  });

  return response;
}

export { registerUser };
