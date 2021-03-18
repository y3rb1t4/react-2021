import React from "react";
import { useFetch } from "./../../hooks/useFetch";

export default function Episode() {
  const [data, fetching, error] = useFetch("episode");
  return <div></div>;
}
