
import RecommendedEats from "./RecommendedEats";
import Category from "./Category";
import PopularRestaurant from "./PopularRestaurant";
export default function Home() {

  return (
    <>
      <section className="mind-wrapper">
        <div className="container-fluid custom-max-width">
          
          <Category />
          <PopularRestaurant />
          <RecommendedEats />
          <hr />
        </div>
      </section>
    </>
  );
}
