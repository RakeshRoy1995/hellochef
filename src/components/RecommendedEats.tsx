import { useSelector } from "react-redux";
import Products from "./Products";
import ShowPlace from "../customComponents/ShowPlace";
import ContentLoader from "../layout/ContentLoader";

export default function RecommendedEats() {
  const category_data: any = useSelector((state: any) => state?.place);
  const loadingSpin = useSelector((state: any) => state?.loading?.value);
  return (
    <section className="delivery-wrapper mind-wrapper">
      {loadingSpin?.val == "1" ? (
        <ContentLoader />
      ) : (
        <div className="container custom-max-width">
          <div className="row">
            <div className="col-md-12">
              <div className="delivery">
                <h3>
                  Recommended eats in <ShowPlace />
                </h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Products
                product_data={category_data?.products_most_reviewed?.products}
                base_url={
                  category_data?.get_default_config?.base_urls
                    ?.product_image_url
                }
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
