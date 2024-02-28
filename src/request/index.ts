export const getCurrentPlayLists = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MOCK_POSTMAN_SPOTIFY_API}/home/current-playlits`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getSongs = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MOCK_POSTMAN_SPOTIFY_API}/home/songs`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const createTodo = async (body: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MOCK_POSTMAN_SPOTIFY_API}/todo`,
    { method: "POST", body }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to create data");
  }

  return res.json();
};
