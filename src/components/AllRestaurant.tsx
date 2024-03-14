import { useSelector } from "react-redux";
export default function AllRestaurant() {
  const category_data: any = useSelector((state: any) => state?.place);
  
  
  const filters = ( value:any) =>{

    if (value == "Low to High") {
      // category_data?.restaurants_latest
    }
  }
  return (
    <section className="delivery-wrapper mind-wrapper">
      <div className="container custom-max-width">
        <div className="row">
          <div className="col-md-12">
            <div className="delivery">
              <h3>
                All restaurant chains in{" "}
                {category_data?.place_api_details?.result?.formatted_address ||
                  category_data?.get_zone_id?.zone_data[0]?.country}
              </h3>
              <div className="filter-wrap">
                <ul>
                  <li>
                    <a href="#">Filter</a>
                  </li>
                  <li>
                    <select name="Sortby" onChange={(e :any)=> filters(e.target.value)  } id="sort" form="sortorm">
                      <option value="">Sort By</option>
                      <option value="Delivery Time">Delivery Time</option>
                      <option value="Rating">Rating</option>
                      <option value="Low to High">Cost: Low to High</option>
                      <option value="High to Low">Cost: High to Low</option>
                    </select>
                  </li>
                  <li>
                    <a onClick={ (e :any)=> filters("Fast Delivery")  }>Fast Delivery</a>
                  </li>
                  <li>
                    <a onClick={ (e :any)=> filters("New on Hallochef")  }>New on Hallochef</a>
                  </li>
                  <li>
                    <a onClick={ (e :any)=> filters("4.0")  }>Ratings 4.0+</a>
                  </li>
                  <li>
                    <a onClick={ (e :any)=> filters("Pure Veg")  }>Pure Veg</a>
                  </li>
                  <li>
                    <a onClick={ (e :any)=> filters("Offers")  }>Offers</a>
                  </li>
                  <li>
                    <a onClick={ (e :any)=> filters("Rs. 300-Rs. 600")  }>Rs. 300-Rs. 600</a>
                  </li>
                  <li>
                    <a onClick={ (e :any)=> filters("Less than Rs. 300")  }>Less than Rs. 300</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {category_data?.restaurants_latest.map((data: any, key: any) => (
            <>
              <div className="col-xs-6 col-sm-6 col-md-3" key={key}>
                <div className="recipe-chain recommended-recipe">
                  <img
                    src={
                      category_data?.get_default_config?.base_urls
                        ?.restaurant_cover_photo_url +
                      "/" +
                      data?.cover_photo
                    }
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
            </>
          ))}
        </div>

        {/* <div className="row button-wrap">
          <a className="show-btn" href="#">
            Show more <i className="fa fa-angle-down" aria-hidden="true" />
          </a>
        </div> */}
      </div>
    </section>
  );
}
