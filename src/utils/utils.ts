// import { useDispatch } from "react-redux";
// import { countTimerLoginExpire } from "../redux/countTimer";
import cogoToast from "cogo-toast";
import { useSelector } from "react-redux";

export const Validation = (
  customInputValidationCheck = [],
  element = document
) => {
  let validate = true;
  const collection: any = element.querySelectorAll(
    "input ,  textarea , select"
  );
  for (let i = 0; i < collection.length; i++) {
    let x: any = collection[i];

    if (collection[i].name) {
      collection[i].style.border = "";

      if (collection[i].required && !collection[i].value) {
        console.log(`collection[i].name`, collection[i].name);
        validate = false;
        collection[i].style.border = "1px solid red";

        if (x.previousSibling) {
          x.previousSibling.classList.add("requiredMessage");
        } else {
          x.parentElement.classList.add("requiredMessage");
        }
      }

      if (customInputValidationCheck && customInputValidationCheck.length) {
        if (
          customInputValidationCheck.includes(x.name) &&
          !collection[i].value
        ) {
          validate = false;
          if (collection[i].name === "description") {
            x.parentElement.classList.add("requiredMessage");
          }
          collection[i].style.border = "1px solid red";
        }
      }
    }
  }
  if (!validate) {
    toast(false, "Required fields can not be empty");
  }
  return validate;
};

export const toast = (type: any, msg: any) => {
  if (type === true) {
    cogoToast.success(msg, { position: "top-right" });
  }

  if (type === false) {
    cogoToast.error(msg, { position: "top-right" });
  }
};

export const formatNumber = (number: any) => {
  if (number) {
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(1) + "B";
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    } else {
      return number.toString();
    }
  }
};

// export function timeSince(date:any) {

//   const seconds = Math.floor((new Date() - new Date(date) ) / 1000);

//   let interval = seconds / 31536000;

//   if (interval > 1) {
//     return Math.floor(interval) + " years";
//   }
//   interval = seconds / 2592000;
//   if (interval > 1) {
//     return Math.floor(interval) + " months";
//   }
//   interval = seconds / 86400;
//   if (interval > 1) {
//     return Math.floor(interval) + " days";
//   }
//   interval = seconds / 3600;
//   if (interval > 1) {
//     return Math.floor(interval) + " hours";
//   }
//   interval = seconds / 60;
//   if (interval > 1) {
//     return Math.floor(interval) + " minutes";
//   }
//   return Math.floor(seconds) + " seconds";
// }

export const slick_multiple_breakdown_settings: any = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const slick_multiple_breakdown_menu_settings: any = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const slick_multiple_breakdown_settings_cuisin: any = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 9,
  slidesToScroll: 3,
  initialSlide: 8,
  responsive: [
    {
      breakpoint: 1280, // New breakpoint starting from 1280px
      settings: {
        slidesToShow: 7, // Adjust slidesToShow and slidesToScroll as needed
        slidesToScroll: 3,
        initialSlide: 7,
        // Add any other settings you want for this breakpoint
      },
    },

    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        // dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
  ],
};

export const sortingFunc = (data: any, key: any) => {
  if (key == "RatingLow") {
    const x = data;
    const sortedRestaurants = [...x];
    sortedRestaurants.sort((a, b) => {
      const avgRatingA =
        typeof a.avg_rating === "number"
          ? a.avg_rating
          : parseFloat(a.avg_rating);
      const avgRatingB =
        typeof b.avg_rating === "number"
          ? b.avg_rating
          : parseFloat(b.avg_rating);
      return avgRatingA - avgRatingB;
    });

    return sortedRestaurants;
  }

  if (key == "RatingHigh") {
    const x = data;
    const sortedRestaurants = [...x];
    sortedRestaurants.sort((a, b) => {
      const avgRatingA =
        typeof a.avg_rating === "number"
          ? a.avg_rating
          : parseFloat(a.avg_rating);
      const avgRatingB =
        typeof b.avg_rating === "number"
          ? b.avg_rating
          : parseFloat(b.avg_rating);
      return avgRatingB - avgRatingA;
    });
    return sortedRestaurants;
  }

  if (key == "Fast Delivery") {
    const x = data;
    const sortedRestaurants = [...x];
    sortedRestaurants.sort((a: any, b: any) => {
      const avgRatingA = a?.delivery_time.split("-")[0];
      const avgRatingB = b?.delivery_time.split("-")[0];
      return avgRatingA - avgRatingB;
    });
    return sortedRestaurants;
  }

  if (key == "Offers") {
    const x = data;
    const sortedRestaurants = [...x];
    const olderThan4 = sortedRestaurants.filter(
      (data) => data?.discount?.discount > 0
    );
    return olderThan4;
  }

  if (key == "free delevery") {
    const x = data;
    const sortedRestaurants = [...x];
    const olderThan4 = sortedRestaurants.filter((data) => data?.free_delivery);
    return olderThan4;
  }

  if (key == "4") {
    const x = data;
    const sortedRestaurants = [...x];
    const olderThan4 = sortedRestaurants.filter((data) => data.avg_rating >= 4);

    return olderThan4;
  }

  if (key == "Pure Veg") {
    const x = data;
    const sortedRestaurants = [...x];
    const olderThan4 = sortedRestaurants.filter((data) => data.veg == 1);

    return olderThan4;
  }

  return [];
};

export const showTotalInCart = (data: any) => {
  const addons = data?.addons_selected;

  let addons_total: number = 0;
  for (const property in addons) {
    addons_total +=
      Number(addons[property].qty) * Number(addons[property].price);
  }

  const subTotal = Number(data?.price) * Number(data?.total_qty);
  const grand_total = subTotal + addons_total;

  let calculablePrice: number = 0;

  if (data?.discount) {
    if (data?.discount_type == "percent") {
      calculablePrice =
        Number(grand_total) -
        (Number(grand_total) * Number(data?.discount)) / 100;
    } else {
      calculablePrice = Number(grand_total) - Number(data?.discount);
    }
  }

  return calculablePrice || grand_total;
};

export const showGrandTotalInCart = (array: any) => {
  let grand_total = 0;
  for (let index = 0; index < array.length; index++) {
    grand_total += showTotalInCart(array[index]);
  }

  return grand_total;
};

export const showPriceOfProduct = (array: any) => {
  let grand_total = 0;
  for (let index = 0; index < array.length; index++) {
    grand_total += showTotalInCart(array[index]);
  }

  return grand_total;
};

export const getAllProductsByCatID = (
  allProducts = [],
  cat_id: number,
  veg = "",
  name = ""
) => {
  let result = allProducts.filter((data) => data.category_id == cat_id);
  if (name !== "") {
    result = result.filter((data) =>
      data.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  if (veg !== "") {
    result = result.filter((data) => data.veg == veg);
  }

  return result;
};

export const getAllProductsGroupByCategory = (allProducts = []) => {
  const playersByTeam = groupBy(
    allProducts,
    (player: any) => player.category_id
  );

  return playersByTeam;
};

function groupBy(array, callback) {
  const groups = {};
  array.forEach((item, index) => {
    const groupName = callback(item, index, array);
    if (!groups[groupName]) {
      groups[groupName] = [];
    }
    groups[groupName].push(item);
  });
  return groups;
}

export const showCampaignProducts = (allcampaign = []) => {
  const allCatIds = allcampaign.map((data: any) => {
    const ids = data?.category_ids.map((cat_id: any) => {
      return cat_id?.id;
    });

    return ids;
  });

  const newArr = [];

  for (const arr of allCatIds) {
    newArr.push(...arr);
  }

  return newArr;
};

export const getAllProductsOfcampaign = (allCatId = [], allProducts = []) => {
  const products = [];
  for (let index = 0; index < allCatId.length; index++) {
    const id = allCatId[index];
    const temp_data = getAllProductsByCatID(allProducts, id);

    products.push(temp_data);
  }

  const newArr = [];

  for (const arr of products) {
    newArr.push(...arr);
  }

  return newArr;
};

export const getAllcategoryByIDS = (allCatId = [], allcategory = []) => {
  const result = allcategory.filter((data) => allCatId.includes(data.id));
  return result;
};
