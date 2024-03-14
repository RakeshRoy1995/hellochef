import { useSelector } from "react-redux";
import Products from "./Products";

export default function RecommendedEats() {
  const category_data: any = useSelector((state: any) => state?.place);
  
  
  return (
    <section className="delivery-wrapper mind-wrapper">
      <div className="container custom-max-width">
        <div className="row">
          <div className="col-md-12">
            <div className="delivery">
              <h3>
                Recommended eats in{" "}
                {category_data?.place_api_details?.result?.formatted_address ||
                  category_data?.get_zone_id?.zone_data[0]?.country}
              </h3>
              
            </div>
          </div>
        </div>

        <div className="row">

          <Products product_data={category_data?.products_most_reviewed?.products} base_url={category_data?.get_default_config?.base_urls
                              ?.product_image_url} />
          
        </div>

        
      </div>
    </section>
  );
}
