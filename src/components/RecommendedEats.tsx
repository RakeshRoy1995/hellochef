import { useSelector } from "react-redux";

export default function RecommendedEats() {
  const category_data: any = useSelector((state: any) => state?.place);
  
  return (
    <section className="delivery-wrapper mind-wrapper">
      <div className="container-fluid custom-max-width">
        <div className="row">
          <div className="col-md-12">
            <div className="delivery">
              <h3>
                Recommended eats in{" "}
                {category_data?.place_api_details?.result?.formatted_address ||
                  category_data?.get_zone_id?.zone_data[0]?.country}
              </h3>
              <div className="filter-wrap">
                <ul>
                  <li>
                    <a href="#">Filter</a>
                  </li>
                  <li>
                    <a href="#">
                      <select name="Sortby" id="sort" form="sortorm">
                        <option value="volvo">Sort By</option>
                        <option value="volvo">Relevance (Default)</option>
                        <option value="saab">Delivery Time</option>
                        <option value="opel">Rating</option>
                        <option value="audi">Cost: Low to High</option>
                        <option value="audi">Cost: High to Low</option>
                      </select>
                    </a>
                  </li>
                  <li>
                    <a href="#">Fast Delivery</a>
                  </li>
                  <li>
                    <a href="#">New on Swiggy</a>
                  </li>
                  <li>
                    <a href="#">Ratings 4.0+</a>
                  </li>
                  <li>
                    <a href="#">Pure Veg</a>
                  </li>
                  <li>
                    <a href="#">Offers</a>
                  </li>
                  <li>
                    <a href="#">Rs. 300-Rs. 600</a>
                  </li>
                  <li>
                    <a href="#">Less than Rs. 300</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {category_data?.products_most_reviewed?.products.map((data: any, key: any) => (
            <div className="col-xs-6 col-sm-6 col-md-3" key={key}>
              <div className="recipe-chain">
                <img
                  src={
                    category_data?.get_default_config?.base_urls
                      ?.product_image_url +
                    "/" +
                    data?.image
                  }
                  alt=""
                />
                <div className="chain-wrap">
                  <h5>{data?.restaurant?.name}</h5>
                  <p className="rating">
                    <span>
                      <img src="image/star.png" width={15} height={15} alt="" />
                    </span>
                    <span>{data?.avg_rating}</span>
                    <span className="span">35-40 mins</span>s
                  </p>
                  <p>Pizzas, Pastas, Italian, Desserts, Beverages</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row button-wrap">
          <a className="show-btn" href="#">
            Show more <i className="fa fa-angle-down" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
