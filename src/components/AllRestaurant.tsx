import { useSelector } from "react-redux";
import AllRestaurantComponent from "./AllRestaurantComponent";
import { useState } from "react";
import { sortingFunc } from "../utils/utils";
export default function AllRestaurant() {
  const category_data: any = useSelector((state: any) => state?.place);
  const [data, setdata] = useState([]);
  
  const filters = ( value:any) =>{

    const x = category_data?.restaurants_latest
    const data =  sortingFunc(x, value)

    if (data.length ) {
      setdata(data)
    }
    

    console.log(`value`,value );
      
  }
  return (
    <section className="delivery-wrapper mind-wrapper">
      <div className="container custom-max-width">
        <div className="row">
          <div className="col-md-12">
            <div className="delivery">
              <h3>
                All restaurant in{" "}
                {category_data?.get_zone_id?.zone_data[0]?.country || category_data?.place_api_details?.result?.formatted_address 
                  }
              </h3>
              <div className="filter-wrap">
                <ul>
                  <li>
                    <a href="#">Filter</a>
                  </li>
                  <li>
                    <select name="Sortby" onChange={(e :any)=> filters(e.target.value)  } id="sort" form="sortorm">
                      <option value="">Sort By</option>
                      {/* <option value="Delivery Time">Delivery Time</option> */}
                      <option value="RatingHigh">Rating: High to Low  </option>
                      <option value="RatingLow">Rating: Low to High </option>
                      {/* <option value="Low to High">Cost: Low to High</option>
                      <option value="High to Low">Cost: High to Low</option> */}
                    </select>
                  </li>
                  <li>
                    <a className="curson_point" onClick={ (e :any)=> filters("Fast Delivery")  }>Fast Delivery</a>
                  </li>
                  <li>
                    <a className="curson_point" onClick={ (e :any)=> filters("free delevery")  }>Free Delevery</a>
                  </li>
                  <li>
                    <a className="curson_point" onClick={ (e :any)=> filters("4")  }>Ratings 4.0+</a>
                  </li>
                  <li>
                    <a className="curson_point" onClick={ (e :any)=> filters("Pure Veg")  }>Pure Veg</a>
                  </li>
                  <li>
                    <a className="curson_point" onClick={ (e :any)=> filters("Offers")  }>Offers</a>
                  </li>
                  {/* <li>
                    <a onClick={ (e :any)=> filters("Rs. 300-Rs. 600")  }>Rs. 300-Rs. 600</a>
                  </li>
                  <li>
                    <a onClick={ (e :any)=> filters("Less than Rs. 300")  }>Less than Rs. 300</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">

          {
            data.length > 0 ? 

            <AllRestaurantComponent restaurent={data} base_url={category_data?.get_default_config?.base_urls
              ?.restaurant_cover_photo_url} /> :

              <AllRestaurantComponent restaurent={category_data?.restaurants_latest} base_url={category_data?.get_default_config?.base_urls
                ?.restaurant_cover_photo_url} />

          }

          
          
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
