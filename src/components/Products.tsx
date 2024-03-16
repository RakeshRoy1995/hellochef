import Slider from "react-slick";
import { currency_symbol, slick_multiple_breakdown_settings } from "../utils/utils";

export default function Products({ product_data, base_url }: any) {
  return (
    <>
      <Slider {...slick_multiple_breakdown_settings}>
        {product_data?.map((data: any, key: any) => (
          <div className="item" key={key}>
            <div className="recipe-chain popular-recipe">
              <img
                src={base_url + "/" + data?.image}
                width={270}
                height={180}
                alt=""
              />
              <div className="chain-wrap">
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
                  <span className="span">{currency_symbol()} {data?.price} </span>
                </p>
               

                {data?.restaurant_name}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
