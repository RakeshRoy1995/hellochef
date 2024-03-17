import CurrencySymbol from "./CurrencySymbol";

export default function AllRestaurantComponent({ restaurent, base_url }: any) {
  return (
    <>
      {restaurent &&
        restaurent.map((data: any, key: any) => (
          <>
            <div className="col-xs-6 col-sm-6 col-md-3" key={key}>
              <div className="recipe-chain recommended-recipe">
                <div className="price-wrapper">
                  <img src={base_url + "/" + data?.cover_photo} alt="" />

                  <div className="price-wrap">
                    {data?.discount?.max_discount == 0 && (
                      <p>
                        {" "}
                        {data?.discount?.discount}{" "}
                        {data?.discount?.discount_type == "percent" ? "%" : ""}{" "}
                        OFF on min perchase <CurrencySymbol />{" "}
                        {data?.discount?.min_purchase}
                      </p>
                    )}

                    {data?.discount?.max_discount > 0 && (
                      <p>
                        {" "}
                        {data?.discount?.discount}{" "}
                        {data?.discount?.discount_type == "percent" ? "%" : ""}{" "}
                        OFF UPTO <CurrencySymbol />
                        {data?.discount?.min_purchase}
                      </p>
                    )}
                  </div>
                </div>

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
    </>
  );
}
