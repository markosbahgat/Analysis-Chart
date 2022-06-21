import React from "react";
import { DetailsHOC } from "HOCs";
import { useParams } from "react-router-dom";

export default function School() {
  const { id } = useParams<"id">();
  return <DetailsHOC id={id} />;
}
