import React, { useState } from "react";
import ProductsFeatcher from "./ProductsFeatcher";
import { useSelector } from "react-redux";
import {
  getAllProductsByCatID,
  getAllProductsGroupByCategory,
} from "../utils/utils";
import ShowPrice from "../customComponents/ShowPrice";
import CustomModal from "../customComponents/CustomModal";

export default function Menu() {
  const category_data: any = useSelector((state: any) => state?.place);

  const [open, setOpen] = useState(false);
  const [data, setdata] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setdata("");
  };

  console.log(`data`, data);

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

                  {category_data?.category?.map((cat_data: any, key: any) => (
                    <div className="sub-part-outer" key={key}>
                      <div className="s-img">
                        <img
                          src={
                            category_data?.get_default_config?.base_urls
                              ?.category_image_url +
                            "/" +
                            cat_data?.image
                          }
                          alt=""
                        />
                      </div>
                      <div className="s-text">
                        <p>{cat_data?.name}</p>
                      </div>
                      <div className="s-count">
                        <p>
                          ({" "}
                          {
                            getAllProductsByCatID(
                              category_data?.products_popular?.products,
                              cat_data.id
                            ).length
                          }{" "}
                          )
                        </p>
                      </div>
                    </div>
                  ))}
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

              {category_data?.category?.map((cat_data: any, key: any) => (
                <>
                  <div className="row " key={key}>
                    <div className="col-md-12">
                      <h4 className="outlet-name">{cat_data?.name}</h4>
                    </div>
                  </div>
                  <div className="row order-row">
                  {getAllProductsByCatID(
                    category_data?.products_popular?.products,
                    cat_data.id
                  ).map((product: any, k: any) => (
                    
                      <div className="col-sm-6 col-md-6" key={k}>
                        <div className="outlet-pro-wrap">
                          <div className="outlet-p-text">
                            <h4 className="item-title">{product?.name}</h4>
                            <p className="heading-customize ">
                              {product?.description}
                            </p>
                            <span className="customisable-span">
                              {product?.variations.length
                                ? "Customisation Available"
                                : "Customisation Unailable"}
                            </span>
                            <p className="price-p">
                              <ShowPrice data={product} />
                              {/* <i className="fa fa-inr" aria-hidden="true" /> 545 */}
                            </p>
                          </div>
                          <div className="outlet-p-img">
                            <img
                              src={
                                category_data?.get_default_config?.base_urls
                                  ?.product_image_url +
                                "/" +
                                product?.image
                              }
                              alt=""
                            />
                            <div className="cart-new-btn">
                              <div
                                className="btn"
                                onClick={(e: any) => {
                                  setdata(product);
                                  setOpen(true);
                                }}
                              >
                                ADD +
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                  ))}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        {data && (
          <CustomModal
            data={data}
            setdata={setdata}
            base_url={
              category_data?.get_default_config?.base_urls?.product_image_url
            }
            handleOpen={handleOpen}
            handleClose={handleClose}
            setOpen={setOpen}
            open={open}
          />
        )}
      </section>
    </>
  );
}
