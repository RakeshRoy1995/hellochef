import Slider from "react-slick";
import { slick_multiple_breakdown_settings } from "../utils/utils";
import { useSelector } from "react-redux";

export default function PopularRestaurant() {
  const category_data: any = useSelector((state: any) => state?.place);
  console.log(`category_data?.category?`, category_data?.category);
  return (
    <section className="mind-wrapper">
      <div className="container-fluid custom-max-width">
        <div className="row controller-wrap">
          <div className="col-xs-12 col-sm-6 col-md-6">
            <h3>Top restaurant chains in {category_data?.place_api_details?.result
                          ?.formatted_address || category_data?.get_zone_id?.zone_data[0]?.country}</h3>
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
              <Slider {...slick_multiple_breakdown_settings}>
                {category_data?.reataurant_popular?.map((data: any, key: any) => (
                  <div className="item" key={key}>
                    <div className="recipe-chain">
                      <img src={
                                category_data?.get_default_config?.base_urls
                                  ?.restaurant_cover_photo_url + "/" + data?.cover_photo
                              }alt="" />
                      <div className="chain-wrap">
                        <h5>{data?.name}</h5>
                        <p className="rating">
                          <span>
                            <img
                              src={
                                category_data?.get_default_config?.base_urls
                                  ?.product + "/" + data?.image
                              }

                              width={15}
                              height={15}
                              alt=""
                            />
                          </span>
                          <span>4.5 .</span>
                          <span className="span">35-40 mins</span>
                        </p>
                        <p>
                          Tibetan, Chinese, Snacks, Continental,
                          Desserts&lt;-chain
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
}
