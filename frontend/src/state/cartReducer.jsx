import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: {},
  },
  reducers: {
    addProductAction: (state, action) => {
      state.products[action.payload] = { addTime: Date.now(), quantity: 1 };
    },
    removeProductAction: (state, action) => {
      delete state.products[action.payload];
    },
    updateProductQuantityAction: (state, action) => {
      state.products[action.payload.productId].quantity =
        action.payload.quantity;
    },
  },
});

export const {
  addProductAction,
  removeProductAction,
  updateProductQuantityAction,
} = cartSlice.actions;

const cartProductsSelector = (state) => state.cart.products;

const productIdSelector = (_, productId) => productId;

export const cartContainsProductSelector = createSelector(
  cartProductsSelector,
  productIdSelector,
  (products, productId) => productId in products
);

export const productQuantitySelector = createSelector(
  cartProductsSelector,
  productIdSelector,
  (products, productId) =>
    products[productId] ? products[productId].quantity : undefined
);

const productIdsSelector = (_, productIds) => productIds;

export const cartContainsNoProductsSelector = createSelector(
  cartProductsSelector,
  productIdsSelector,
  (products, productIds) =>
    productIds.every((productId) => !(productId in products))
);

export const orderedCartSelector = createSelector(
  cartProductsSelector,
  (products) => Object.entries(products).sort((a, b) => a.addTime - b.addTime)
);

export default cartSlice.reducer;
