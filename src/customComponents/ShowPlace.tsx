import React from "react";
import { useSelector } from "react-redux";

export default function ShowPlace() {
  const place_data = useSelector((state: any) => state?.place);
  return (
    <>
      {place_data?.place_api_details?.result?.formatted_address ||
        place_data?.get_zone_id?.zone_data[0]?.country}
    </>
  );
}
