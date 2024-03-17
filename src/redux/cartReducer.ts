import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

// interface product {
//   _id: number;
//   name?: string;
//   total_qty: number;
//   total_price: number;
// }

const initialState = [];

const cartReducer = createSlice({
  name: "carts",
  initialState,
  reducers: {
    cincrement: (state, action) => {
      console.log(`cartProduct`, action);

      const newState = state && state?.filter((value) => value?.id);

      const cartProduct = newState.map((product) => ({
        ...product,
      }));
      const itemIndex = cartProduct.findIndex(
        (product) => product.id === action.payload.id
      );

      if (itemIndex > -1) {
        cartProduct[itemIndex].total_qty =
          cartProduct[itemIndex].total_qty + action?.payload.total_iteam;
        cartProduct[itemIndex].total_price =
          cartProduct[itemIndex].total_price +
          action.payload.price * action.payload.total_iteam;
        cartProduct[itemIndex].checkstatus = action.payload.checkstatus;
        cartProduct[itemIndex].has_discount = action.payload.has_discount;
        cartProduct[itemIndex].calculable_price =
          action.payload.calculable_price;
        cartProduct[itemIndex].price = action.payload.price;
        
        cartProduct[itemIndex].checkstatus = true;

        return cartProduct;
      } else {
        return [
          ...state,
          {
            ...action.payload,
            total_qty: action?.payload.total_iteam,
            total_price: action.payload.price * action?.payload.total_iteam,
            checkstatus: true,
          },
        ];
      }
    },

    storeData: (state, action) => {
      return action.payload;
    },

    cdecrement: (state, action) => {
      var cartProducts = state.map((product) => ({
        ...product,
      }));
      const itemIndexNo = cartProducts.findIndex(
        (product) => product._id === action.payload._id
      );

      if (cartProducts[itemIndexNo].total_qty === 1) {
        return state.filter((product) => product._id !== action.payload._id);
      } else if (itemIndexNo > -1) {
        cartProducts[itemIndexNo].total_qty =
          cartProducts[itemIndexNo].total_qty - 1;
        cartProducts[itemIndexNo].total_price =
          cartProducts[itemIndexNo].total_price - action.payload.price;
        return cartProducts;
      } else {
        return [...state];
      }
    },
    commonAction: (state, action) => {
      state.value = action.payload;
    },
    cremove: (state, action) => {
      return state.filter(({ _id }) => _id !== action.payload);
    },
    changeStatus: (state, action) => {
      var cartProducts = state.map((product) => ({
        ...product,
      }));
      const itemIndexNo = cartProducts.findIndex(
        (product) => product._id === action.payload._id
      );
      cartProducts[itemIndexNo].checkstatus = action.payload.checkstatus;
      console.log("itemIndexNo", itemIndexNo);
      return cartProducts;
    },
    changeStatusAll: (state, action) => {
      var cartProducts = state.map((product) => ({
        ...product,
      }));
      cartProducts.map(
        (product) => (product.checkstatus = action.payload.checkstatus)
      );
      console.log("cartProducts", cartProducts);
      return cartProducts;
    },
  },
});
export default cartReducer.reducer;
export const {
  cincrement,
  cdecrement,
  commonAction,
  cremove,
  changeStatus,
  changeStatusAll,
  storeData,
} = cartReducer.actions;
