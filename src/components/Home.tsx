import RecommendedEats from "./RecommendedEats";
import Cuisine from "./Cuisine";
import PopularRestaurant from "./PopularRestaurant";
import AllRestaurant from "./AllRestaurant";
export default function Home() {
  return (
    <>
      <Cuisine />
      <PopularRestaurant />
      <RecommendedEats />
      <AllRestaurant />
      <hr />

      
    </>
  );
}
