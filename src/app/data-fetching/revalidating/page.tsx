import React from "react";
import { getCurrentPlayLists, getSongs } from "@/request";

// ! However, we recommend configuring the caching behavior of each fetch() request individually.
// ! This gives you more granular control over the caching behavior.
// export const revalidate = 60; // revalidate every seconds

const Revalidating = async () => {
  const dataSongs = getSongs();
  const dataCurrentPlaylists = getCurrentPlayLists();
  const [songs, currentPlaylists] = await Promise.all([dataSongs, dataCurrentPlaylists])

  return (
    <>
      <h1 className="text-[18px] font-bold">Revalidating</h1>

      <div className="mb-3">
        <div className="font-semibold">Songs</div>
        {songs.data.map(({ id, title }: any) => (
          <div key={id}>{title}</div>
        ))}
      </div>

      <div className="mb-3">
        <div className="font-semibold">Current Playlists</div>
        {currentPlaylists.data.map(({ id, title }: any) => (
          <div key={id}>{title}</div>
        ))}
      </div>
    </>
  );
};

export default Revalidating;
