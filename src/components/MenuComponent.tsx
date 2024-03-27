import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllProductsByCatID } from "../utils/utils";
import ShowPrice from "../customComponents/ShowPrice";
import CustomModal from "../customComponents/CustomModal";
import ContentLoader from "../layout/ContentLoader";

export default function MenuComponent({ allCategory , catData }: any) {
  const category_data: any = useSelector((state: any) => state?.place);
  const loadingSpin = useSelector((state: any) => state?.loading?.value);

  const [selectedCategory, setselectedCategory] = useState([]);
  const [vag, setvag] = useState<any>("");
  const [search, setsearch] = useState<any>("");
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setdata("");
  };

  return (
    <>
      <section className="order-wrapper">
        {loadingSpin?.val == "1" ? (
          <ContentLoader />
        ) : (
          <div className="container custom-max-width">
            <div className="row">
              <div className="col-md-3">
                <div className="category-wrap">
                  <p className="categories-hd">Categories</p>
                  <div className="inner-toogle-new">
                    <div
                      className="sub-part-outer"
                      onClick={(e) => {
                        setvag("");
                        setsearch("");
                      }}
                    >
                      <div className="s-count"></div>
                    </div>

                    {allCategory?.map((cat_data: any, key: any) => (
                      <div
                        className={ cat_data.id == selectedCategory[0]?.id ? "sub-part-outer active" : "sub-part-outer"}
                        key={key}
                        onClick={(e) => setselectedCategory([cat_data])}
                      >
                        <div className="s-text">
                          <p>{cat_data?.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                {
                  catData?.name && <p className="categories-hd">{catData?.name}</p>
                }
              
                {selectedCategory.length > 0 ? (
                  <>
                    {selectedCategory?.map((cat_data: any, key: any) => (
                      <>
                        {getAllProductsByCatID(
                          category_data?.products_popular?.products,
                          cat_data.id,
                          vag,
                          search
                        ).length > 0 && (
                          <>
                            <div className="row " key={key}>
                              <div className="col-md-12">
                                <h4 className="outlet-name">
                                  {cat_data?.name}
                                </h4>
                              </div>
                            </div>
                            <div className="row order-row">
                              {getAllProductsByCatID(
                                category_data?.products_popular?.products,
                                cat_data.id,
                                vag,
                                search
                              ).map((product: any, k: any) => (
                                <div
                                  className="col-sm-4 col-md-4 curson_point"
                                  key={k}
                                  onClick={(e: any) => {
                                    setdata(product);
                                    setOpen(true);
                                  }}
                                >
                                  <div className="outlet-pro-wrap">
                                    <div className="outlet-p-img">
                                      <img
                                        src={
                                          category_data?.get_default_config
                                            ?.base_urls?.product_image_url +
                                          "/" +
                                          product?.image
                                        }
                                        alt=""
                                      />
                                      <h4 className="item-title">
                                        {product?.name}
                                      </h4>
                                      <p className="price-p">
                                        <ShowPrice data={product} />
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    ))}
                  </>
                ) : (
                  <>
                    {allCategory?.map((cat_data: any, key: any) => (
                      <>
                        {getAllProductsByCatID(
                          category_data?.products_popular?.products,
                          cat_data.id,
                          vag,
                          search
                        ).length > 0 && (
                          <>
                            <div className="row " key={key}>
                              <div className="col-md-12">
                                <h4 className="outlet-name">
                                  {cat_data?.name}
                                </h4>
                              </div>
                            </div>
                            <div className="row order-row">
                              {getAllProductsByCatID(
                                category_data?.products_popular?.products,
                                cat_data.id,
                                vag,
                                search
                              ).map((product: any, k: any) => (
                                <div
                                  className="col-sm-4 col-md-4 curson_point"
                                  key={k}
                                  onClick={(e: any) => {
                                    setdata(product);
                                    setOpen(true);
                                  }}
                                >
                                  <div className="outlet-pro-wrap">
                                    <div className="outlet-p-img">
                                      <img
                                        src={
                                          category_data?.get_default_config
                                            ?.base_urls?.product_image_url +
                                          "/" +
                                          product?.image
                                        }
                                        alt=""
                                      />
                                      <h4 className="item-title">
                                        {product?.name}
                                      </h4>
                                      <p className="price-p">
                                        <ShowPrice data={product} />
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
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
