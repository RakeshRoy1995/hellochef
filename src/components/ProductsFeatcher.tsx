import Slider from "react-slick";
import {
  getAllProductsByCatID,
  getAllProductsOfcampaign,
  showCampaignProducts,
  slick_multiple_breakdown_menu_settings,
  slick_multiple_breakdown_settings,
} from "../utils/utils";
import CurrencySymbol from "./CurrencySymbol";
import { useState } from "react";
import CustomModal from "../customComponents/CustomModal";
import ShowPrice from "../customComponents/ShowPrice";

export default function ProductsFeatcher({
  campaignData,
  allproduct_data,
  base_url,
  setfeaturedItems
}: any) {
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setdata("");
  };

  const allCatID = showCampaignProducts(campaignData);

  const allProducts = getAllProductsOfcampaign(allCatID, allproduct_data);
  setfeaturedItems(allProducts.length)
  
  return (
    <>
      <Slider {...slick_multiple_breakdown_menu_settings}>
        {allProducts?.map((data: any, key: any) => (
          <div className="item curson_point" key={key}>
            <div className="featured-outer">
              <div className="recipe-chain featured-iteam">
                <div className="bg-span" />
                <img src={base_url + "/" + data?.image} alt="" />
                <div className="featured-upper">
                  <div className="veg-flag">
                    <span />
                  </div>
                  <h4 className="item-title">{data?.name}</h4>
                </div>
              </div>
              <div className="featured-lower">
                <div>
                  <p className="price-p">
                    <ShowPrice data={data} />
                  </p>
                </div>
                <div className="cart-new-btn">
                  <div
                    className="btn"
                    onClick={(e: any) => {
                      setdata(data);
                      setOpen(true);
                    }}
                  >
                    ADD +
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {data && (
        <CustomModal
          data={data}
          setdata={setdata}
          base_url={base_url}
          handleOpen={handleOpen}
          handleClose={handleClose}
          setOpen={setOpen}
          open={open}
        />
      )}
    </>
  );
}
