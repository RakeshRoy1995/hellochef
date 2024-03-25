import React, { useEffect, useState } from "react";
import ProductsFeatcher from "./ProductsFeatcher";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsByCatID,
  getAllProductsGroupByCategory,
  getAllcategoryByIDS,
} from "../utils/utils";
import ShowPrice from "../customComponents/ShowPrice";
import CustomModal from "../customComponents/CustomModal";
import { restaurants_details } from "../Request";
import { useParams } from "react-router-dom";
import { loading_rdx } from "../redux/loading";
import ContentLoader from "../layout/ContentLoader";
import MenuComponent from "./MenuComponent";

export default function MenuRestaurant() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const category_data: any = useSelector((state: any) => state?.place);
  const loadingSpin = useSelector((state: any) => state?.loading?.value);

  const [featuredItems, setfeaturedItems] = useState("");
  const [allCategory, setallCategory] = useState([]);
  const [catData, setcatData] = useState<any>({});
  const [vag, setvag] = useState<any>("");
  const [search, setsearch] = useState<any>("");
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setdata("");
  };

  const fetchData = async () => {
    let v: any = {
      val: 1,
    };

    dispatch(loading_rdx(v));

    const { data }: any = await restaurants_details(id);
    if (data?.active) {
      const allCat: any = getAllcategoryByIDS(
        data?.category_ids,
        category_data?.category
      );

      setcatData(data);

      setallCategory(allCat);

      v = {
        val: 0,
      };
      dispatch(loading_rdx(v));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="order-wrapper">
        {loadingSpin?.val == "1" ? (
          <ContentLoader />
        ) : (
          <MenuComponent allCategory={allCategory} />
        )}
      </section>
    </>
  );
}
