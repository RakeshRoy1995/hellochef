// import { useDispatch } from "react-redux";
// import { countTimerLoginExpire } from "../redux/countTimer";
import cogoToast from "cogo-toast";

export const Validation = (
  customInputValidationCheck = [],
  element = document
) => {
  let validate = true;
  const collection :any = element.querySelectorAll("input ,  textarea , select");
  for (let i = 0; i < collection.length; i++) {
    let x : any = collection[i];

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

export const toast = (type :any, msg:any) => {
  if (type === true) {
    cogoToast.success(msg, { position: "top-right" });
  }

  if (type === false) {
    cogoToast.error(msg, { position: "top-right" });
  }
};

export const formatNumber = (number :any) => {
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

export function timeSince(date:any) {
  
  const seconds = Math.floor((new Date() - new Date(date) ) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}


export const slick_multiple_breakdown_settings: any = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
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



export const slick_multiple_breakdown_settings_cuisin: any = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 10,
  initialSlide: 0,
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
