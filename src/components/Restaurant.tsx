import Slider from "react-slick";
import { slick_multiple_breakdown_settings } from "../utils/utils";
import { Link } from "react-router-dom";

export default function Restaurant({ restaurant_data, base_url }: any) {
  return (
    <Slider {...slick_multiple_breakdown_settings}>
      {restaurant_data?.map((data: any, key: any) => (
        <div className="item" key={key}>
          <div className="recipe-chain popular-recipe">

            
            <img
              src={base_url + "/" + data?.cover_photo}
              width={270}
              height={180}
              alt=""
            />
            <div className="chain-wrap">
              <Link to={`/restaurant/${data?.name.replaceAll(" ", "-")}/${data?.id}`}>
              <h5>{data?.name}</h5>
              </Link>
              
              

              <p className="rating">
                {data?.avg_rating > 0 && (
                  <>
                    <span>
                      <img src="image/star.png" width={15} height={15} alt="" />
                    </span>
                    <span>{data?.avg_rating}</span>
                  </>
                )}
                <span className="span">{data?.delivery_time} min</span>
              </p>
              <p>
                {data?.cuisines.map((d: any) => (
                  <>{d?.name} </>
                ))}
              </p>

              {data?.free_delivery && <p>Free delivery</p>}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
