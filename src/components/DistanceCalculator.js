import React from "react";
import haversine from "haversine";

export function distanceCalculator(coordinates, setDistance) {
  const start = {
    latitude: coordinates.start.lat,
    longitude: coordinates.start.lng,
  };

  const end = {
    latitude: coordinates.end.lat,
    longitude: coordinates.end.lng,
  };

  let miles = haversine(start, end, { unit: "mile" });
  console.log("miles", miles);
  setDistance(Math.floor(miles));
}
