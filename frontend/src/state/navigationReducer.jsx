/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    aboutVisible: false,
    cartVisible: true,
    currentWizardPage: 0,
  },
  reducers: {
    navigateToAboutAction: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.aboutVisible = true;
    },
    navigateExitAboutAction: (state) => {
      state.aboutVisible = false;
    },
    navigateShowCartAction: (state) => {
      state.cartVisible = true;
    },
    navigateHideCartAction: (state) => {
      state.cartVisible = false;
    },
    navigateWizardAction: (state, action) => {
      state.currentWizardPage = action.payload;
    },
    navigateNextWizardAction: (state) => {
      state.currentWizardPage += 1;
    },
    navigatePreviousWizardAction: (state) => {
      state.currentWizardPage -= 1;
    },
  },
});

export const {
  navigateToAboutAction,
  navigateExitAboutAction,
  navigateShowCartAction,
  navigateHideCartAction,
  navigateWizardAction,
  navigateNextWizardAction,
  navigatePreviousWizardAction,
} = navigationSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.navigation.value)`
export const navigationAboutVisibleSelector = (state) =>
  state.navigation.aboutVisible;

export const navigationCartVisibleSelector = (state) =>
  state.navigation.cartVisible;

export const navigationCurrentWizardPageSelector = (state) =>
  state.navigation.currentWizardPage;

export const navigationWizardLastPageSelector = (state) =>
  state.navigation.currentWizardPage;

export default navigationSlice.reducer;
