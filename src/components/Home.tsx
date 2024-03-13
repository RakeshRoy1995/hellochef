
import RecommendedEats from "./RecommendedEats";
import Cuisine from "./Cuisine";
import PopularRestaurant from "./PopularRestaurant";
import AllRestaurant from "./AllRestaurant";
export default function Home() {

  return (
    <>
      <section className="mind-wrapper">
        <div className="container custom-max-width">
          
          <Cuisine />
          <PopularRestaurant />
          <RecommendedEats />
          <AllRestaurant />
          <hr />
        </div>
      </section>
    </>
  );
}
