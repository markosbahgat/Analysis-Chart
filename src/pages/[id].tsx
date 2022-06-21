import React from "react";
import { useParams } from "react-router-dom";
import { DetailsHOC } from "@/HOCs/index";

export default function School() {
  const { id } = useParams<"id">();
  return <DetailsHOC id={id} />;
}
