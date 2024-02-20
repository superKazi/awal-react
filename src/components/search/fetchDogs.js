async function fetchDogs() {
  const apiRes = await fetch(`https://dog.ceo/api/breeds/list/all`);
  const data = await apiRes.json();

  if (!apiRes.ok) {
    throw new Error(`all dogs fetch failed`);
  }

  if (apiRes.ok && data.status !== "success") {
    throw new Error("api response okay but status on response wasn't success");
  }

  return data;
}

export { fetchDogs };
