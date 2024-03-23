import Slider from "react-slick";
import { showCampaignProducts, slick_multiple_breakdown_menu_settings, slick_multiple_breakdown_settings } from "../utils/utils";
import CurrencySymbol from "./CurrencySymbol";
import { useState } from "react";
import CustomModal from "../customComponents/CustomModal";
import ShowPrice from "../customComponents/ShowPrice";

export default function ProductsFeatcher({ product_data, base_url }: any) {
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setdata("");
  };


  showCampaignProducts(product_data)


  // console.log(`product_data`, product_data);
  return (
    <>
      {/* <Slider {...slick_multiple_breakdown_menu_settings}>
        {product_data?.map((data: any, key: any) => (
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
                  <div className="btn" 
                  onClick={(e: any) => {
                    setdata(data);
                    setOpen(true);
                  }}
                  >ADD +</div>
                </div>
              </div>
            </div>
          </div>

          // <div className="item curson_point" key={key}>
          //   <div
          //     className="recipe-chain popular-recipe"
          //     onClick={(e: any) => {
          //       setdata(data);
          //       setOpen(true);
          //     }}
          //   >
          //     <img
          //       src={base_url + "/" + data?.image}
          //       width={270}
          //       height={180}
          //       alt=""
          //     />
          //     <div className="chain-wrap">
          //       <h5>{data?.name}</h5>

          //       <p className="rating">
          //         {data?.avg_rating > 0 && (
          //           <>
          //             <span>
          //               <img
          //                 src="image/star.png"
          //                 width={15}
          //                 height={15}
          //                 alt=""
          //               />
          //             </span>
          //             <span>{data?.avg_rating}</span>
          //           </>
          //         )}
          //         <span className="span">
          //           {" "}
          //            <ShowPrice data={data} /> {" "}
          //         </span>
          //       </p>

          //       {data?.restaurant_name}
          //     </div>
          //   </div>
          // </div>
        ))}
      </Slider> */}

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
