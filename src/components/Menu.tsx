import React from "react";
import ProductsFeatcher from "./ProductsFeatcher";
import { useSelector } from "react-redux";

export default function Menu() {
  const category_data: any = useSelector((state: any) => state?.place);
  return (
    <>
      <section className="order-wrapper">
        <div className="container custom-max-width">
          <div className="row">
            <div className="col-md-3">
              <div className="category-wrap">
                <p className="categories-hd">Categories</p>
                <div className="inner-toogle-new">
                  <div className="sub-part-outer">
                    <div className="s-img">
                      <i className="fa fa-heart" aria-hidden="true" />
                    </div>
                    <div className="s-text">
                      <p>Featured Items</p>
                    </div>
                    <div className="s-count">
                      <p>(6)</p>
                    </div>
                  </div>
                  <div className="sub-part-outer">
                    <div className="s-img">
                      <img src="image/i1.png" alt="" />
                    </div>
                    <div className="s-text">
                      <p>BOGO</p>
                    </div>
                    <div className="s-count">
                      <p>(2)</p>
                    </div>
                  </div>
                  <div className="sub-part-outer">
                    <div className="s-img">
                      <img src="image/i2.png" alt="" />
                    </div>
                    <div className="s-text">
                      <p>Flat Out</p>
                    </div>
                    <div className="s-count">
                      <p>(9)</p>
                    </div>
                  </div>
                  <div className="sub-part-outer">
                    <div className="s-img">
                      <img src="image/i2.png" alt="" />
                    </div>
                    <div className="s-text">
                      <p>Value Combos</p>
                    </div>
                    <div className="s-count">
                      <p>(9)</p>
                    </div>
                  </div>
                  <div className="sub-part-outer">
                    <div className="s-img">
                      <img src="image/i2.png" alt="" />
                    </div>
                    <div className="s-text">
                      <p>Personal Slice Veg Pizza.</p>
                    </div>
                    <div className="s-count">
                      <p>(9)</p>
                    </div>
                  </div>
                  <div className="sub-part-outer">
                    <div className="s-img">
                      <img src="image/i2.png" alt="" />
                    </div>
                    <div className="s-text">
                      <p>Flat Out</p>
                    </div>
                    <div className="s-count">
                      <p>(9)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row veg-toggle">
                <div className="col-sm-6 col-md-6">
                  <div className="search-bar">
                    <input type="text" placeholder="Search.." />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="voggle-right">
                    <div
                      className="checkboxnew-outer"
                      id="vegNonBoth"
                      style={{}}
                    >
                      <div className="chek action">
                        <label>
                          <input
                            type="checkbox"
                            defaultValue={1}
                            name="chkBestSeller"
                          />
                          <span>
                            <div className="veg-flag">
                              <span />
                            </div>{" "}
                            Veg{" "}
                            <i
                              className="las la-times"
                              style={{ marginLeft: 5 }}
                            />
                          </span>
                        </label>
                      </div>
                      <div className="chek comedy">
                        <label>
                          <input
                            type="checkbox"
                            defaultValue={2}
                            name="chkBestSeller"
                          />
                          <span>
                            <div className="non-vegflag">
                              <span />
                            </div>{" "}
                            Non-Veg{" "}
                            <i
                              className="las la-times"
                              style={{ marginLeft: 5 }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h4 className="outlet-name">Featured Items</h4>
                  <div id="featured" className="">
                    <ProductsFeatcher
                      product_data={
                        category_data?.products_most_reviewed?.products
                      }
                      base_url={
                        category_data?.get_default_config?.base_urls
                          ?.product_image_url
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12">
                  <h4 className="outlet-name">BOGO</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-6">
                  <div className="outlet-pro-wrap">
                    <div className="outlet-p-text">
                      <h4 className="item-title">Buy 1 Get 1 Free [Medium]</h4>
                      <p className="heading-customize ">
                        Buy 1 Get 1 Free [Medium]
                      </p>
                      <span className="customisable-span">
                        Customisation Available
                      </span>
                      <p className="price-p">
                        <i className="fa fa-inr" aria-hidden="true" /> 545
                      </p>
                    </div>
                    <div className="outlet-p-img">
                      <img src="image/outlet1.png" alt="" />
                      <div className="cart-new-btn">
                        <div className="btn">ADD +</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="outlet-pro-wrap">
                    <div className="outlet-p-text">
                      <h4 className="item-title">Buy 1 Get 1 Free [Large]</h4>
                      <p className="heading-customize ">
                        Buy 1 Get 1 Free [Medium]
                      </p>
                      <span className="customisable-span">
                        Customisation Available
                      </span>
                      <p className="price-p">
                        <i className="fa fa-inr" aria-hidden="true" /> 685
                      </p>
                    </div>
                    <div className="outlet-p-img">
                      <img src="image/outlet1.png" alt="" />
                      <div className="cart-new-btn">
                        <div className="btn">ADD +</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12">
                  <h4 className="outlet-name">Flat Out</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-6">
                  <div className="outlet-pro-wrap">
                    <div className="outlet-p-text">
                      <h4 className="item-title">Buy 1 Get 1 Free [Medium]</h4>
                      <p className="heading-customize ">
                        Buy 1 Get 1 Free [Medium]
                      </p>
                      <span className="customisable-span">
                        Customisation Available
                      </span>
                      <p className="price-p">
                        <i className="fa fa-inr" aria-hidden="true" /> 545
                      </p>
                    </div>
                    <div className="outlet-p-img">
                      <img src="image/outlet1.png" alt="" />
                      <div className="cart-new-btn">
                        <div className="btn">ADD +</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="outlet-pro-wrap">
                    <div className="outlet-p-text">
                      <h4 className="item-title">Buy 1 Get 1 Free [Large]</h4>
                      <p className="heading-customize ">
                        Buy 1 Get 1 Free [Medium]
                      </p>
                      <span className="customisable-span">
                        Customisation Available
                      </span>
                      <p className="price-p">
                        <i className="fa fa-inr" aria-hidden="true" /> 685
                      </p>
                    </div>
                    <div className="outlet-p-img">
                      <img src="image/outlet1.png" alt="" />
                      <div className="cart-new-btn">
                        <div className="btn">ADD +</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
