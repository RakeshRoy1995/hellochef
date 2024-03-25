import React, { useState } from "react";
import ProductsFeatcher from "./ProductsFeatcher";
import { useSelector } from "react-redux";
import {
  getAllProductsByCatID,
  getAllProductsGroupByCategory,
} from "../utils/utils";
import ShowPrice from "../customComponents/ShowPrice";
import CustomModal from "../customComponents/CustomModal";
import MenuComponent from "./MenuComponent";

export default function Menu() {
  const category_data: any = useSelector((state: any) => state?.place);

  const [featuredItems, setfeaturedItems] = useState("");
  const [vag, setvag] = useState<any>("");
  const [search, setsearch] = useState<any>("");
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setdata("");
  };

  console.log(`data`, vag);

  return (
    <>
      <section className="order-wrapper">
        <MenuComponent allCategory={category_data?.category} />
      </section>
    </>
  );
}
