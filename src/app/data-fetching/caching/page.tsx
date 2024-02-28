import React from "react";

const getDataDetail = async () => {
  // 'force-cache' is the default, and can be omitted
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_API}/todos/1`,
    { cache: "force-cache" }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Caching = async () => {
  const data = await getDataDetail();

  console.log(data);

  return (
    <div>
      <div>Caching Todo Detail</div>
      <div>
        <div>{data.title}</div>
      </div>
    </div>
  );
};

export default Caching;
