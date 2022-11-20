async function create({ resource, body }) {
  const url = `https://epistemic-api.onrender.com${resource}`;
  const headers = {
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json",
  };

  const response = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(body),
  });

  let data;
  try {
    data = await response.json();
    if (data?.success === false) throw data;
  } catch (e) {
    data = null;
  }

  if (!response.ok) {
    throw data;
  } else {
    return data;
  }
}

export { create };
