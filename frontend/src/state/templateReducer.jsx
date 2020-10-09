import { createSelector, createSlice } from "@reduxjs/toolkit";

export const templateSlice = createSlice({
  name: "template",
  initialState: {
    activeKitId: "1",
    kits: {
      1: { title: "Keto Starter Kit", pages: ["1", "2", "3", "4", "5"] },
    },
    pages: {
      1: { title: "Beverages", sections: ["1"] },
      2: { title: "Snacks", sections: ["1", "3", "4"] },
      3: { title: "P3", sections: ["3"] },
      4: { title: "P4", sections: ["4"] },
      5: { title: "P5", sections: ["1"] },
    },
    sections: {
      1: {
        title: "Coffee",
        description:
          "You might not realize it yet, but keto can eliminate many of your favorite beverages.  What's left?  Coffee.  Let's make sure you have everything you need to hit the ground running.  Quo ipsum mucius option ei, ad sed facilis ancillae forensibus",
        products: ["1", "2", "3"],
      },
      2: {
        title: "Title 2",
        description: "description 2",
        products: ["3", "1", "3"],
      },
      3: {
        title: "Title 3",
        description: "description 3",
        products: ["4", "5"],
      },
      4: {
        title: "Title 4",
        description: "description 4",
        products: ["6", "7", "8", "9"],
      },
    },
    products: {
      1: {
        title: "Bulletproof Brain Octane Greg Here Product",
        link:
          "https://www.amazon.com/Bulletproof-Octane-Reliable-Source-Ketogenic/dp/B00P8E0QQG/ref=as_li_ss_tl?dchild=1&keywords=bulletproof+mct&qid=1600208360&sr=8-5&linkCode=ll1&tag=ketostarterki-20&linkId=068d91961eda444d025690a933044741&language=en_US",
        images: [
          "https://images-na.ssl-images-amazon.com/images/I/814SQGpRwpL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61dmd3M5XcL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
        ],
        price: 3.99,
        descriptions: [
          {
            text:
              "Morem ipsum dolor sit amet, amet nihil consetetur cu mel. Quo am ipsum mucius option ei, ad",
            sentiment: "good",
          },
          {
            text: "Mmucius option",
            sentiment: "good",
          },
          {
            text:
              "MQuo ipsum mucius option ei, ad sed facilis ancillae forensibus",
            sentiment: "bad",
          },
          {
            text: "Mutat sensibus vim ex",
            sentiment: "neutral",
          },
        ],
      },
      2: {
        title: "Onnit MCT Oil",
        link: "https://ebay.com",
        images: [
          "https://images-na.ssl-images-amazon.com/images/I/61NiTMP4jPL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61NiTMP4jPL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/21014F31HBL._AC_.jpg",
        ],
        price: 10.2,
        descriptions: [
          {
            text:
              "Lorem ipsum dolor sit amet, amet nihil consetetur cu mel. Quo am ipsum mucius option ei, ad",
            sentiment: "good",
          },
          {
            text: "mucius option",
            sentiment: "good",
          },
          {
            text:
              "Quo ipsum mucius option ei, ad sed facilis ancillae forensibus",
            sentiment: "bad",
          },
          {
            text: "Mutat sensibus vim ex",
            sentiment: "neutral",
          },
        ],
      },
      3: {
        title: "Bacon Cooker",
        link: "https://google.com",
        images: [
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71GQFw5JrgL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
        ],
        price: 120.25,
        descriptions: [
          {
            text:
              "Lorem ipsum dolor sit amet, amet nihil consetetur cu mel. Quo am ipsum mucius option ei, ad",
            sentiment: "neutral",
          },
          {
            text: "mucius option",
            sentiment: "neutral",
          },
          {
            text:
              "Quo ipsum mucius option ei, ad sed facilis ancillae forensibus",
            sentiment: "neutral",
          },
          {
            text: "Mutat sensibus vim ex",
            sentiment: "neutral",
          },
        ],
      },
      4: {
        title: "Microwave Bacon Cooker",
        link: "https://google.com",
        images: [
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71GQFw5JrgL._AC_SL1500_.jpg",
        ],
        price: 120.25,
        descriptions: [
          {
            text:
              "Lorem ipsum dolor sit amet, amet nihil consetetur cu mel. Quo am ipsum mucius option ei, ad",
            sentiment: "neutral",
          },
          {
            text: "mucius option",
            sentiment: "neutral",
          },
          {
            text:
              "Quo ipsum mucius option ei, ad sed facilis ancillae forensibus",
            sentiment: "neutral",
          },
          {
            text: "Mutat sensibus vim ex",
            sentiment: "neutral",
          },
        ],
      },
      5: {
        title: "Black and Decker Spatula",
        link: "https://google.com",
        images: [
          "https://images-na.ssl-images-amazon.com/images/I/71GQFw5JrgL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
        ],
        price: 120.25,
        descriptions: [
          {
            text:
              "Lorem ipsum dolor sit amet, amet nihil consetetur cu mel. Quo am ipsum mucius option ei, ad",
            sentiment: "neutral",
          },
          {
            text: "mucius option",
            sentiment: "neutral",
          },
          {
            text:
              "Quo ipsum mucius option ei, ad sed facilis ancillae forensibus",
            sentiment: "neutral",
          },
          {
            text: "Mutat sensibus vim ex",
            sentiment: "neutral",
          },
        ],
      },
      6: {
        title: "Bacon Cooker Two",
        link: "https://google.com",
        images: [
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71GQFw5JrgL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
        ],
        price: 120.25,
        descriptions: [
          {
            text:
              "Lorem ipsum dolor sit amet, amet nihil consetetur cu mel. Quo am ipsum mucius option ei, ad",
            sentiment: "neutral",
          },
          {
            text: "mucius option",
            sentiment: "neutral",
          },
          {
            text:
              "Quo ipsum mucius option ei, ad sed facilis ancillae forensibus",
            sentiment: "neutral",
          },
          {
            text: "Mutat sensibus vim ex",
            sentiment: "neutral",
          },
        ],
      },
      7: {
        title: "Bacon Cooker Three",
        link: "https://google.com",
        images: [
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71GQFw5JrgL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
        ],
        price: 120.25,
        descriptions: [
          {
            text:
              "Lorem ipsum dolor sit amet, amet nihil consetetur cu mel. Quo am ipsum mucius option ei, ad",
            sentiment: "neutral",
          },
          {
            text: "mucius option",
            sentiment: "neutral",
          },
          {
            text:
              "Quo ipsum mucius option ei, ad sed facilis ancillae forensibus",
            sentiment: "neutral",
          },
          {
            text: "Mutat sensibus vim ex",
            sentiment: "neutral",
          },
        ],
      },
      8: {
        title: "Bacon Dehydrator",
        link: "https://google.com",
        images: [
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71GQFw5JrgL._AC_SL1500_.jpg",
        ],
        price: 120.25,
        descriptions: [
          {
            text:
              "Lorem ipsum dolor sit amet, amet nihil consetetur cu mel. Quo am ipsum mucius option ei, ad",
            sentiment: "neutral",
          },
          {
            text: "mucius option",
            sentiment: "neutral",
          },
          {
            text:
              "Quo ipsum mucius option ei, ad sed facilis ancillae forensibus",
            sentiment: "neutral",
          },
          {
            text: "Mutat sensibus vim ex",
            sentiment: "neutral",
          },
        ],
      },
      9: {
        title: "Amazon Basics Bacon Defroster",
        link: "https://google.com",
        images: [
          "https://images-na.ssl-images-amazon.com/images/I/71GQFw5JrgL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71dg3kXPdbL._AC_SL1500_.jpg",
        ],
        price: 120.25,
        descriptions: [
          {
            text:
              "Lorem ipsum dolor sit amet, amet nihil consetetur cu mel. Quo am ipsum mucius option ei, ad",
            sentiment: "neutral",
          },
          {
            text: "mucius option",
            sentiment: "neutral",
          },
          {
            text:
              "Quo ipsum mucius option ei, ad sed facilis ancillae forensibus",
            sentiment: "neutral",
          },
          {
            text: "Mutat sensibus vim ex",
            sentiment: "neutral",
          },
        ],
      },
    },
    // activeKitId: "1",
    // kits: {},
    // pages: {},
    // sections: {},
    // products: {},
  },
  reducers: {
    updateActiveKitAction: (state, action) => {
      state.activeKitId = action.payload;
    },
    updateKitAction: (state, action) => {
      state.kits[action.payload.id] = action.payload;
    },
    removeKitAction: (state, action) => {
      delete state.kits[action.payload.id];
    },
    updatePageAction: (state, action) => {
      state.pages[action.payload.id] = action.payload;
    },
    removePageAction: (state, action) => {
      delete state.pages[action.payload.id];
    },
    updateSectionAction: (state, action) => {
      state.sections[action.payload.id] = action.payload;
    },
    removeSectionAction: (state, action) => {
      delete state.sections[action.payload.id];
    },
    updateProductAction: (state, action) => {
      state.products[action.payload.id] = action.payload;
    },
    removeProductAction: (state, action) => {
      delete state.products[action.payload.id];
    },
  },
});

export const {
  updateActiveKitAction,
  updateKitAction,
  removeKitAction,
  updateLayoutAction,
  updatePageAction,
  removePageAction,
  updateSectionAction,
  removeSectionAction,
  updateProductAction,
  removeProductAction,
} = templateSlice.actions;

export const activeKitIdSelector = (state) => state.template.activeKitId;
const kitsSelector = (state) => state.template.kits;
const pagesSelector = (state) => state.template.pages;
const sectionsSelector = (state) => state.template.sections;
const productsSelector = (state) => state.template.products;

const idSelector = (_, id) => id;
export const kitSelector = createSelector(
  kitsSelector,
  idSelector,
  (allKits, kitId) => allKits[kitId]
);
export const pageSelector = createSelector(
  pagesSelector,
  idSelector,
  (allPages, pageId) => allPages[pageId]
);
export const sectionSelector = createSelector(
  sectionsSelector,
  idSelector,
  (allSections, sectionId) => allSections[sectionId]
);
export const productSelector = createSelector(
  productsSelector,
  idSelector,
  (allProducts, productId) => allProducts[productId]
);

const idsSelector = (_, ids) => ids;
export const allPagesSelector = createSelector(
  pagesSelector,
  idsSelector,
  (allPages, pageIds) => pageIds.map((pageId) => allPages[pageId])
);

export default templateSlice.reducer;
