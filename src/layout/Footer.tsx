import { useDispatch } from "react-redux";
import {
  banners_api,
  campaign_api,
  categories_api,
  config_api,
  cuisines_api,
  get_restaurant_all_offset_limit_api,
  get_zone_id,
  loginPass,
  place_api_autocomplete,
  place_api_details,
  products_most_reviewed_api,
  products_popular_api,
  registration,
  restaurants_all,
  restaurants_latest_api,
  varifyOTP,
} from "../Request";

import {
  banner_rdx,
  campaign_rdx,
  category_rdx,
  cuisines_rdx,
  get_default_config_rdx,
  get_restaurant_all_offset_limit_rdx,
  get_zone_id_rdx,
  place_api_details_rdx,
  products_most_reviewed_rdx,
  products_popular_rdx,
  restaurant_popular_rdx,
  restaurants_latest_rdx,
} from "../redux/PlaceReducer";
import { storeData } from "../redux/cartReducer";


export default function Footer() {
  const dispatch = useDispatch();



  const fetchData = async (lat: any, lng: any) => {

    dispatch(storeData(''))
    const zone: any = await get_zone_id(lat, lng);
    dispatch(get_zone_id_rdx(zone?.data));

    const banners: any = await banners_api(zone?.data?.zone_id);
    dispatch(banner_rdx(banners?.data));

    const category: any = await categories_api(zone?.data?.zone_id);
    dispatch(category_rdx(category?.data));

    const cuisines: any = await cuisines_api(zone?.data?.zone_id);
    dispatch(cuisines_rdx(cuisines?.data));

    const restaurants: any = await restaurants_all(zone?.data?.zone_id);
    dispatch(restaurant_popular_rdx(restaurants?.data));

    const campaign: any = await campaign_api(zone?.data?.zone_id);
    dispatch(campaign_rdx(campaign?.data));

    const products_popular: any = await products_popular_api(
      zone?.data?.zone_id
    );
    dispatch(products_popular_rdx(products_popular?.data));

    const restaurants_latest: any = await restaurants_latest_api(
      zone?.data?.zone_id
    );
    dispatch(restaurants_latest_rdx(restaurants_latest?.data));

    const products_most_reviewed: any = await products_most_reviewed_api(
      zone?.data?.zone_id
    );
    dispatch(products_most_reviewed_rdx(products_most_reviewed?.data));

    const get_restaurant_all_offset_limit: any =
      await get_restaurant_all_offset_limit_api(zone?.data?.zone_id);
    dispatch(
      get_restaurant_all_offset_limit_rdx(get_restaurant_all_offset_limit?.data)
    );

    window.location.reload()
  };




  return (
    <footer>
      <section className="footer-area section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="footer-logo">
                <img className="f-logo" src="image/logo.png" alt="" />
                <p>© {new Date().getFullYear()} hallochef</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="company">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  {/* <li>
                    <a href="#">Swiggy One</a>
                  </li>
                  <li>
                    <a href="#">Swiggy Instamart</a>
                  </li>
                  <li>
                    <a href="#">Swiggy Genie</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="contact-us">
                <h4>Contact us</h4>
                <ul>
                  <li>
                    <a href="#">Help &amp; Support</a>
                  </li>
                  <li>
                    <a href="#">Partner with us</a>
                  </li>
                  <li>
                    <a href="#">Ride with us</a>
                  </li>
                </ul>
              </div>
              <div className="legal">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Cookie Policy</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="legal">
                <h4>We deliver to:</h4>
                <ul>
                  <li>
                    <a href="#" onClick={(e)=>  fetchData(13.7563309 , 100.5017651) }>Bangkok</a>
                  </li>
                  <li>
                    <a href="#" onClick={(e)=>  fetchData(23.804093 , 90.4152376) }>Dhaka</a>
                  </li>
                  
                  <li>
                    <a href="#" onClick={(e)=>  fetchData(12.9715987 , 77.5945627) }>Bangalore</a>
                  </li>
                
                  {/* <p>
                    <a
                      className="btn btn-primary"
                      data-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      589 cities
                    </a>
                  </p> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <hr />
                      <h4>Other cities that we deliver:</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-3">
                      <div className="cities">
                        <ul>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-3">
                      <div className="cities">
                        <ul>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-3">
                      <div className="cities">
                        <ul>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-3">
                      <div className="cities">
                        <ul>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                          <li>Dhaka</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
