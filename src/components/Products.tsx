import Slider from "react-slick";
import { slick_multiple_breakdown_settings } from "../utils/utils";
import CurrencySymbol from "./CurrencySymbol";
import { useState } from "react";
import CustomModal from "../customComponents/CustomModal";

export default function Products({ product_data, base_url }: any) {

  const [open, setOpen] = useState(false);
  const [data, setdata] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Slider {...slick_multiple_breakdown_settings}>
        {product_data?.map((data: any, key: any) => (
          <div className="item" key={key} >
            <div className="recipe-chain popular-recipe" onClick={(e:any)=>  {
              setdata(data);
              setOpen(true)
            } }>
              <img
                src={base_url + "/" + data?.image}
                width={270}
                height={180}
                alt=""
              />
              <div className="chain-wrap" >
                <h5>{data?.name}</h5>

                <p className="rating">
                  {data?.avg_rating > 0 && (
                    <>
                      <span>
                        <img
                          src="image/star.png"
                          width={15}
                          height={15}
                          alt=""
                        />
                      </span>
                      <span>{data?.avg_rating}</span>
                    </>
                  )}
                  <span className="span"> <CurrencySymbol /> {data?.price} </span>
                </p>
               

                {data?.restaurant_name}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <CustomModal data={data} base_url={base_url} handleOpen={handleOpen} handleClose={handleClose} setOpen={setOpen} open={open} />
    </>
  );
}
