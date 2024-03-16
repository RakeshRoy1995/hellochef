import React from 'react'
import { useSelector } from 'react-redux';

export default function CurrencySymbol() {
    const category_data: any = useSelector((state: any) => state?.place);
  return (
    <>
       {category_data?.get_zone_id?.zone_data[0]?.currency_symbol} 
    </>
  )
}
