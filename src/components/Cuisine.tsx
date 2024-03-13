import Slider from "react-slick";
import { slick_multiple_breakdown_settings, slick_multiple_breakdown_settings_cuisin } from "../utils/utils";
import { useSelector } from "react-redux";

export default function Cuisine() {
  const category_data: any = useSelector((state: any) => state?.place);
  
  return (
    <>
      <div className="row controller-wrap">
        <div className="col-md-6">
          <h3>What's on your mind?</h3>
        </div>
        <div className="col-md-6">
          {/* <div className="controller">
            <button className="prev prev1">
              <img src="image/left-icon.png" alt="" />
            </button>
            <button className="next next1">
              <img src="image/right-icon.png" alt="" />
            </button>
          </div> */}
        </div>
      </div>

      <div className="slider-container">
        {category_data?.cuisines?.length > 0 && (
          <div className="row">
            <div className="col-md-12">
              <Slider {...slick_multiple_breakdown_settings_cuisin}>
                {category_data.cuisines.map((cat_data: any, key: any) => (
                  <div className="item" key={key}>
                    <div className="recipe cuisin-img">
                      <img
                      
                        src={
                          category_data?.get_default_config?.base_urls
                            ?.cuisine_image_url +
                          "/" +
                          cat_data?.cuisine?.image
                        }
                        width={144}
                        height={180}
                        alt=""
                      />
                      <p style={{marginLeft:"30px"}}>{cat_data?.cuisine?.name}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
