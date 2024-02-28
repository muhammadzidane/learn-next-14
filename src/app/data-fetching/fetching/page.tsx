import React from "react";

import { getSongs } from "@/request";

const Fetching = async () => {
  const dataSongs = await getSongs();

  return (
    <>
      <h1 className="text-[18px] font-bold mb-3">Revalidating</h1>

      <div className="mb-3">
        <div className="font-semibold">Songs</div>
        {dataSongs.data.map(({ id, title }: any) => (
          <div key={id}>{title}</div>
        ))}
      </div>
    </>
  );
};

export default Fetching;
