import { create } from "./apiHandler";

async function recoverPassword(body) {
  const response = await create({
    resource: "/user/forgot",
    body,
  });

  return response;
}

export { recoverPassword };
