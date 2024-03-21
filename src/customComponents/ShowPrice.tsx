import React from "react";
import CurrencySymbol from "../components/CurrencySymbol";

export default function ShowPrice({ data }: any) {
  let calculablePrice: number = 0;

  if (data?.discount) {
    if (data?.discount_type == "percent") {
      calculablePrice =
        Number(data?.price) - (Number(data?.price) * Number(data?.discount) /100) ;
    } else {
      calculablePrice = Number(data?.price) - Number(data?.discount);
    }
  }else{
    calculablePrice = Number(data?.price)
  }
  return (
    <div style={{display: "flex"}}>
        <CurrencySymbol />
      <span>{calculablePrice}</span> {" "}
      {data?.discount > 0 && (
        <div style={{ textDecoration: "line-through" , margin: "0 2px" }}>{data?.price}</div>
      )}
    </div>
  );
}
