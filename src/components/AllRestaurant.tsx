import Slider from "react-slick";
import { slick_multiple_breakdown_settings } from "../utils/utils";
import { useSelector } from "react-redux";
import Restaurant from "./Restaurant";

export default function AllRestaurant() {
  const category_data: any = useSelector((state: any) => state?.place);

  return (
    <section className="mind-wrapper">
      <div className="container custom-max-width">
        <div className="row controller-wrap">
          <div className="col-xs-12 col-sm-6 col-md-6">
            <h3>
              All restaurant chains in{" "}
              {category_data?.place_api_details?.result?.formatted_address ||
                category_data?.get_zone_id?.zone_data[0]?.country}
            </h3>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            {/* <div className="controller">
              <button className="prev2 prev">
                <img src="image/left-icon.png" alt="" />
              </button>
              <button className="next2 next">
                <img src="image/right-icon.png" alt="" />
              </button>
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div id="kolkata" className="">
              <Restaurant
                base_url={
                  category_data?.get_default_config?.base_urls
                    ?.restaurant_cover_photo_url
                }
                restaurant_data={
                  category_data?.get_restaurant_all_offset_limit?.restaurants
                }
              />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
}
