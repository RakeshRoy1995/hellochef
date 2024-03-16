import { useEffect, useState } from "react";
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
import "react-phone-number-input/style.css";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input";
import { useDispatch, useSelector } from "react-redux";
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
import { toast } from "../utils/utils";

const Navbar = () => {
  const dispatch = useDispatch();
  const [error, seterror] = useState([]);
  const [errormsg, seterrormsg] = useState("");
  const [fname, setfname] = useState("");
  const [loginFormShow, setloginFormShow] = useState(true);
  const [lname, setlname] = useState("");
  const [showOtpForm, setshowOtpForm] = useState(false);
  const [loading, setloading] = useState(false);
  const [value, setValue] = useState<any>("");

  const place_data = useSelector((state: any) => state?.place);

  function openNav() {
    document.getElementById("mySidebar").style.width = "60vh";
    document.getElementById("overlay").style.display = "block";
  }

  function closeNav(e) {
    console.log(`22`, 22);
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
  }

  const searchInputOnchng = async (e: any) => {
    const inputValue = e.target.value.toLowerCase();

    const { data }: any = await place_api_autocomplete(inputValue);
    // You can replace this with your own logic to fetch suggestions

    if (data?.predictions.length) {
      const filteredSuggestions = data?.predictions.filter((suggestion: any) =>
        suggestion?.description?.toLowerCase().includes(inputValue)
      );
      displaySuggestions(filteredSuggestions);
    }
  };

  function displaySuggestions(suggestions: any) {
    
    try {


      const suggestionsList: any = document.getElementById("suggestionsList");
    suggestionsList.innerHTML = "";
    suggestionsList.style.display = "block";
    if (suggestions.length > 0) {
      suggestions.forEach((suggestion: any) => {
        const li = document.createElement("li");
        li.textContent = suggestion?.description;
        li.addEventListener("click", async function () {
          try {
            setloading(true);
            seterrormsg("");
            const { data }: any = await place_api_details(suggestion?.place_id);

            if (data.status == "OK") {
              dispatch(place_api_details_rdx(data));
              await fetchData(
                data?.result?.geometry?.location.lat,
                data?.result?.geometry?.location.lng
              );

              const el: any = document.getElementById("mySidebar");
              el.style.width = "0";
              const el_2: any = document.getElementById("overlay");
              el_2.style.display = "none";
            }
            setloading(false);
            window.location.reload();

            suggestionsList.style.display = "none";
          } catch (error: any) {


            console.log(`error`, error?.response);
            const response: any =
              error?.response?.data?.errors[0]?.message ||
              "Something went wrong";
            seterrormsg(response);
            setloading(false);
            // window.location.reload();
            // toast(false, response);
          }
        });
        suggestionsList.appendChild(li);
      });

      suggestionsList.style.display = "block";
    } else {
      suggestionsList.style.display = "none";
    }


      
    } catch (error) {
      window.location.reload();
    }

    
  }

  function openRightNav() {
    document.getElementById("myRightSidebar").style.width = "80vh";
    document.getElementById("rightOverlay").style.display = "block";
  }

  function closeRightNav(e) {
    document.getElementById("myRightSidebar").style.width = "0";
    document.getElementById("rightOverlay").style.display = "none";
  }

  const handleSubmit = async (event: any) => {
    seterror([]);
    event.preventDefault();
    const datas = new FormData(event.target);
    try {
      const { data }: any = await loginPass(datas);

      if (data?.token) {
        localStorage.setItem("customer_login_auth", JSON.stringify(data));
        window.location.href = "/";
      }
    } catch (error: any) {
      seterrormsg("Password did not matched.");
      const res = error?.response?.data?.errors;
      const obj: any = res ? Object.entries(res) : [];
      seterror(obj);
    }
  };

  const handleSubmitSignUp = async (event: any) => {
    setshowOtpForm(false);
    seterror([]);
    event.preventDefault();
    const datas: any = new FormData(event.target);
    try {
      if (showOtpForm) {
        const { data }: any = await varifyOTP(datas);
        console.log(`data`, data);
        setshowOtpForm(false);
        toast(true, "Registration Success");
      } else {
        const { data }: any = await registration(datas);
        console.log(`data`, data);
        setshowOtpForm(true);
        toast(true, "Please check your phone for otp");
      }
      // setshowOtpForm(true);
      //
      // if (data?.token) {
      //   localStorage.setItem("customer_login_auth", JSON.stringify(data));
      //   window.location.href = "/";
      // }
    } catch (error: any) {
      seterrormsg("Password did not matched.");
      const res = error?.response?.data?.errors;
      const obj: any = res ? Object.entries(res) : [];
      seterror(obj);
    }
  };

  const fetchData = async (lat: any, lng: any) => {
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
  };

  const fetchInitial = async () => {
    const config_data: any = await config_api();
    dispatch(get_default_config_rdx(config_data?.data));

    if (!place_data?.get_default_config) {
      await fetchData(
        config_data?.data?.default_location?.lat,
        config_data?.data?.default_location?.lng
      );
    }
  };

  const createFnameLname = (e: any) => {
    const value = e.target.value;
    const first = value.split(" ")[0];
    const last = value.split(" ")[1] || first;
    setfname(first);
    setlname(last);
  };

  useEffect(() => {
    fetchInitial();
  }, []);

  console.log(`searchInputValue`, loading);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <nav id="navbar" className="navbar navbar-custom">
            <div className="row">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="col-md-4">
                <div className="navbar-header page-scroll">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                  >
                    <i className="fa fa-bars" />
                  </button>
                  <div className="head-left-wrap">
                    <div className="site-logo">
                      <a className="page-scroll logo-light" href="#">
                        <img alt="" src="image/logo.jpeg" />
                      </a>
                    </div>
                    <div className="other">
                      <a className="openbtn" onClick={(e: any) => openNav()}>
                        {" "}
                        {place_data?.place_api_details?.result
                          ?.formatted_address ||
                          place_data?.get_zone_id?.zone_data[0]?.country}{" "}
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                >
                  <div className="right-nav text-right float-right">
                    <div className="right-nav text-right">
                      <ul className="nav navbar-nav menu ">
                        <li>
                          <a href="#">
                            <i className="fa fa-search" aria-hidden="true" />{" "}
                            Search
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-percent" aria-hidden="true" />{" "}
                            Offers<sup>NEW</sup>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-life-ring" aria-hidden="true" />{" "}
                            Help
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={openRightNav}>
                            <i
                              className="fa fa-user-circle-o"
                              aria-hidden="true"
                            />{" "}
                            Sign In
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-shopping-cart"
                              aria-hidden="true"
                            />{" "}
                            Cart
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.navbar-collapse */}
            </div>
          </nav>
        </div>
      </div>
      <div id="mySidebar" className="sidebar">
        <a href="#" className="closebtn" onClick={(e) => closeNav(e)}>
          ×
        </a>
        <div className="search-container search-bar">
          {errormsg && <p style={{ color: "red" }}> {errormsg}</p>}

          <input
            type="text"
            id="searchInput"
            autoComplete="off"
            onChange={(e) =>
              setTimeout(() => {
                searchInputOnchng(e);
              }, 100)
            }
            placeholder="Search for area, street name.."
          />
          {loading && <>loading...</>}

          <ul id="suggestionsList" />
        </div>
        <div className="gps">
          <div className="gps-wrap">
            <p>
              <i className="fa fa-location-arrow" aria-hidden="true" />
            </p>
            <a href="#">
              Get current location
              <br />
              <small>Using GPS</small>
            </a>
          </div>
        </div>
      </div>
      <div className="overlay" id="overlay" />

      <div id="myRightSidebar" className="right-sidebar">
        <a href="#" className="closebtn2" onClick={(e) => closeRightNav(e)}>
          ×
        </a>
        <div className="login-sidebar" id="loginSidebar">
          <div className="login-wrap">
            {loginFormShow && (
              <div className="login" id="loginSection">
                <h4>Login</h4>
                <p>
                  or{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      setloginFormShow(!loginFormShow);
                      // toggleSections(e)
                    }}
                  >
                    create an account
                  </a>
                </p>
                <hr />

                <form onSubmit={handleSubmit}>
                  <div className="parent mb-5">
                    <div className="input-box">
                      <PhoneInput
                        placeholder="Enter phone number"
                        defaultCountry={"TH"}
                        value={value}
                        onChange={(e: any) => {
                          console.log(`e`, e);
                          if (e) {
                            setValue(e);
                          }
                        }}
                        name=""
                        className="input"
                      />
                    </div>
                  </div>

                  <input
                    className="input"
                    required
                    type="hidden"
                    value={value.replace(/\s/g, "")}
                    id="phone"
                    name="phone"
                  />

                  <div className="parent">
                    <div className="input-box">
                      <input
                        className="input"
                        required
                        type="password"
                        id="password"
                        name="password"
                      />
                      <label className="label" htmlFor="password">
                        Password
                      </label>
                    </div>
                  </div>

                  <div className="clearfix">
                    <button type="submit" className="login-btn">
                      Login
                    </button>

                    <ul style={{ listStyleType: "none" }}>
                      {error.map((data: any, key: number) => (
                        <li key={key} style={{ color: "red" }}>
                          {data[1].message}
                        </li>
                      ))}
                    </ul>

                    <br />
                    <div className="term-condition">
                      <small>
                        By clicking on Login, I accept the{" "}
                        <a href="#">
                          Terms &amp; Conditions &amp; Privacy Policy
                        </a>
                      </small>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {!loginFormShow && (
              <>
                <div
                  className="login"
                  id="signupSection"
                >
                  <h4>Sign up</h4>
                  <p>
                    or{" "}
                    <a
                      href="#"
                      onClick={(e) => setloginFormShow(!loginFormShow)}
                    >
                      login to your account
                    </a>
                  </p>
                  <hr />
                </div>

                <form
                  onSubmit={handleSubmitSignUp}
                  id="signupForm"
                >
                  {!showOtpForm ? (
                    <>
                      
                      <input type="hidden" name="f_name" value={fname} />
                      <input type="hidden" name="l_name" value={lname} />

                      <div className="parent mb-5">
                        <div className="input-box">
                          <PhoneInput
                            placeholder="Enter phone number"
                            defaultCountry={"TH"}
                            value={value}
                            onChange={(e: any) => {
                              if (e) {
                                setValue(e);
                              }
                            }}
                            name=""
                            className="input"
                          />
                        </div>
                      </div>

                      <div className="parent mb-5">
                        <div className="input-box">
                          <input
                            className="input"
                            required
                            type="email"
                            id="email"
                            name="email"
                          />
                          <label className="label" htmlFor="email">
                            Email
                          </label>
                        </div>
                      </div>

                      <div className="parent mb-5">
                        <div className="input-box">
                          <input
                            className="input"
                            required
                            type="text"
                            onChange={(e: any) => createFnameLname(e)}
                          />
                          <label className="label" htmlFor="fname">
                            Full Name
                          </label>
                        </div>
                      </div>

                      <div className="parent mb-5">
                        <div className="input-box">
                          <input
                            className="input"
                            required
                            type="password"
                            id="password2"
                            name="password"
                          />
                          <label className="label" htmlFor="password2">
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="parent mb-5">
                        <div className="input-box">
                          <input
                            className="input"
                            type="text"
                            id="ref_code"
                            name="ref_code"
                          />
                          <label className="label" htmlFor="ref_code">
                            Referral code (Optional)
                          </label>
                        </div>
                      </div>
                      <input
                        className="input"
                        required
                        type="hidden"
                        value={value.replace(/\s/g, "")}
                        id="phone"
                        name="phone"
                      />
                    </>
                  ) : (
                    <>
                      <input type="text" name="phone" value={value} />
                      <div className="parent mb-5">
                        <div className="input-box">
                          <input
                            className="input"
                            required
                            type="text"
                            name="otp"
                            // onChange={(e: any) => createFnameLname(e)}
                          />
                          <label className="label" htmlFor="fname">
                            Please Enter OTP
                          </label>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="clearfix">
                    <ul style={{ listStyleType: "none" }}>
                      {error.map((data: any, key: number) => (
                        <li key={key} style={{ color: "red" }}>
                          {data[1].message}
                        </li>
                      ))}
                    </ul>

                    <button type="submit" className="login-btn">
                      Continue
                    </button>
                    <br />
                    <div className="term-condition">
                      <small>
                        By creating an account, I accept the{" "}
                        <a href="#">
                          Terms &amp; Conditions &amp; Privacy Policy
                        </a>
                      </small>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="right-overlay" id="rightOverlay" />
    </header>
  );
};

export default Navbar;
