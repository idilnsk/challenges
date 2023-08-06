import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ISSTracker() {
  const { data, error } = useSWR(
    `https://api.wheretheiss.at/v1/satellites/25544`,
    fetcher,
    { initialData: { longitude: 0, latitude: 0 } }
  );

  if (error) return <div>failed to load</div>;

  if (!data) return <div>Loading...</div>;

  const { longitude, latitude } = data;


  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        //onRefresh={getISSCoords}
      />
    </main>
  );
}
