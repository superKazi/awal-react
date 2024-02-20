async function fetchImage({ queryKey }) {
  const [breed, imageUrl] = queryKey;
  const apiRes = await fetch(imageUrl);
  const data = await apiRes.json();

  if (!apiRes.ok) {
    throw new Error(`${breed} random image fetch failed`);
  }

  if (apiRes.ok && data.status !== "success") {
    throw new Error("api response okay but status on response wasn't success");
  }

  return data;
}

export { fetchImage };
