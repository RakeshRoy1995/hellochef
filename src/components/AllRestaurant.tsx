import { useSelector } from "react-redux";
import AllRestaurantComponent from "./AllRestaurantComponent";
export default function AllRestaurant() {
  const category_data: any = useSelector((state: any) => state?.place);
  
  
  const filters = ( value:any) =>{

    if (value == "Rating") {

      console.log(`category_data?.restaurants_latest`, category_data?.restaurants_latest);
      
      const data = category_data?.restaurants_latest



      const sortedArray = [...data].sort((a, b) => a.avg_rating.localeCompare(b.avg_rating));

console.log(sortedArray);




      // let final_data =  data.sort((person1:any, person2:any) => {

      //   console.log(`person1?.avg_rating`,person1?.avg_rating );
      //   return person1?.avg_rating - person2?.avg_rating;
      // });

      // console.log(`data`, final_data);
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

          <AllRestaurantComponent restaurent={category_data?.restaurants_latest} base_url={category_data?.get_default_config?.base_urls
                        ?.restaurant_cover_photo_url} />
          
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
