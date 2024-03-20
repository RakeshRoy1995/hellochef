import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const PlaceReducer = createSlice({
  name: "place",
  initialState,
  reducers: {
    storePlaceData: (state, action) => {
      return action.payload;
    },
    place_api_details_rdx: (state: any, action: any) => {
      state.place_api_details = action.payload;
    },

    get_zone_id_rdx: (state: any, action: any) => {
      state.get_zone_id = action.payload;
    },

    banner_rdx: (state: any, action: any) => {
      state.banner = action.payload;
    },

    category_rdx: (state: any, action: any) => {
      state.category = action.payload;
    },

    cuisines_rdx: (state: any, action: any) => {
      state.cuisines = action.payload;
    },

    campaign_rdx: (state: any, action: any) => {
      state.campaign = action.payload;
    },

    products_popular_rdx: (state: any, action: any) => {
      state.products_popular = action.payload;
    },

    restaurant_popular_rdx: (state: any, action: any) => {
      state.reataurant_popular = action.payload;
    },

    restaurants_latest_rdx: (state: any, action: any) => {
      state.restaurants_latest = action.payload;
    },

    products_most_reviewed_rdx: (state: any, action: any) => {
      state.products_most_reviewed = action.payload;
    },

    get_restaurant_all_offset_limit_rdx: (state: any, action: any) => {
      state.get_restaurant_all_offset_limit = action.payload;
    },

    get_default_config_rdx: (state: any, action: any) => {
      state.get_default_config = action.payload;
    },

  },
});
export default PlaceReducer.reducer;
export const {
  place_api_details_rdx,
  get_zone_id_rdx,
  banner_rdx,
  category_rdx,
  campaign_rdx,
  get_restaurant_all_offset_limit_rdx,
  products_most_reviewed_rdx,
  restaurants_latest_rdx,
  products_popular_rdx,
  get_default_config_rdx,
  restaurant_popular_rdx,
  cuisines_rdx,
  storePlaceData
} = PlaceReducer.actions;
