import { create } from "./apiHandler";

async function signInUser(credentials) {
  const response = await create({
    resource: "/user/auth",
    body: credentials,
  });

  return response;
}

export { signInUser };
