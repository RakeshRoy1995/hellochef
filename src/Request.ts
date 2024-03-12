/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from "axios";

/*Create API_URL for login */
// eslint-disable-next-line no-undef
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

//Login
export function loginPass(data: any) {
  const page_list = `${API_URL}/v1/auth/login`;

  const options = {
    method: "POST",
    headers: { "content-type": "multipart/form-data" },
    data,
    url: page_list,
  };

  return axios(options);
}

export function registration(data: any) {
  const page_list = `${API_URL}/v1/auth/sign-up`;

  const options = {
    method: "POST",
    headers: { "content-type": "multipart/form-data" },
    data,
    url: page_list,
  };

  return axios(options);
}


export function varifyOTP(data: any) {
  const page_list = `${API_URL}/v1/auth/verify-phone`;

  const options = {
    method: "POST",
    headers: { "content-type": "multipart/form-data" },
    data,
    url: page_list,
  };

  return axios(options);
}
export function place_api_autocomplete(data: any) {
  const page_list = `${API_URL}/v1/config/place-api-autocomplete?search_text=${data}`;

  const options = {
    method: "get",
    data,
    url: page_list,
  };

  return axios(options);
}

export function place_api_details(data: any) {
  const page_list = `${API_URL}/v1/config/place-api-details?placeid=${data}`;

  const options = {
    method: "get",
    url: page_list,
  };

  return axios(options);
}

export function get_zone_id(lat:any , lng: any) {
  const page_list = `${API_URL}/v1/config/get-zone-id`;

  const options = {
    method: "get",
    url: page_list,
    params: {
      lat,
      lng
    }
  };

  return axios(options);
}


export function banners_api(zone_id:any) {
  const page_list = `${API_URL}/v1/banners`;
  const headers = {
    'Zoneid': zone_id,
  };

  const options = {
    method: "get",
    url: page_list,
    headers
  };
  return axios(options);
}


export function categories_api(zone_id:any) {
  const page_list = `${API_URL}/v1/categories`;
  const headers = {
    'Zoneid': zone_id,
  };

  const options = {
    method: "get",
    url: page_list,
    headers
  };
  return axios(options);
}


export function cuisines_api(zone_id:any) {
  const page_list = `${API_URL}/v1/cuisines/list`;
  const headers = {
    'Zoneid': zone_id,
  };

  const options = {
    method: "get",
    url: page_list,
    headers
  };
  return axios(options);
}

export function restaurants_all(zone_id:any , type="all") {
  const page_list = `${API_URL}/v1/restaurants/popular`;
  const headers = {
    'Zoneid': zone_id,
  };

  const options = {
    method: "get",
    url: page_list,
    headers,
    params: {
      type
    }
  };
  return axios(options);
}

export function campaign_api(zone_id:any) {
  const page_list = `${API_URL}/v1/campaigns/item`;
  const headers = {
    'Zoneid': zone_id,
  };

  const options = {
    method: "get",
    url: page_list,
    headers
  };
  return axios(options);
}

export function products_popular_api(zone_id:any , type="all") {
  const page_list = `${API_URL}/v1/products/popular`;
  const headers = {
    'Zoneid': zone_id,
  };

  const options = {
    method: "get",
    url: page_list,
    headers,
    params: {
      type
    }
  };
  return axios(options);
}


export function restaurants_latest_api(zone_id:any , type="all") {
  const page_list = `${API_URL}/v1/restaurants/latest`;
  const headers = {
    'Zoneid': zone_id,
  };

  const options = {
    method: "get",
    url: page_list,
    headers,
    params: {
      type
    }
  };
  return axios(options);
}

export function products_most_reviewed_api(zone_id:any , type="all") {
  const page_list = `${API_URL}/v1/products/most-reviewed`;
  const headers = {
    'Zoneid': zone_id,
  };

  const options = {
    method: "get",
    url: page_list,
    headers,
    params: {
      type
    }
  };
  return axios(options);
}

export function get_restaurant_all_offset_limit_api(zone_id:any , offset=0 , limit=10) {
  const page_list = `${API_URL}/v1/restaurants/get-restaurants/all`;
  const headers = {
    'Zoneid': zone_id,
  };

  const options = {
    method: "get",
    url: page_list,
    headers,
    params: {
      offset,
      limit
    }
  };
  return axios(options);
}

export function config_api() {
  const page_list = `${API_URL}/v1/config`;

  const options = {
    method: "get",
    url: page_list,
  };

  return axios(options);
}