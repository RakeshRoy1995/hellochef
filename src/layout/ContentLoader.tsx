import React from "react";
import { Code } from "react-content-loader";
import { useSelector } from "react-redux";
export default function ContentLoader() {
  const loadingSpin = useSelector((state: any) => state?.loading?.value);
  return <>{loadingSpin?.val == "1" && <Code />}</>;
}
