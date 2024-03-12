import Slider from "react-slick";
import { slick_multiple_breakdown_settings } from "../utils/utils";
import { useSelector } from "react-redux";

export default function Category() {
  const category_data: any = useSelector((state: any) => state?.place);
  console.log(`category_data?.category?`, category_data?.category);
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
        {category_data?.category?.length > 0 && (
          <div className="row">
            <div className="col-md-12">
              <Slider {...slick_multiple_breakdown_settings}>
                {category_data.category.map((cat_data: any, key: any) => (
                  <div className="item" key={key}>
                    <div className="recipe">
                      <img
                        src={
                          category_data?.get_default_config?.base_urls
                            ?.cuisine_image_url +
                          "/" +
                          cat_data?.cover_photo
                        }
                        width={144}
                        height={180}
                        alt=""
                      />
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
