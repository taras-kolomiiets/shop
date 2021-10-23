const defaultState = {
  data: {
    products: [
      {
        id: 1,
        name: "article 1",
        label:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: 25,
      },
      {
        id: 2,
        name: "article 2",
        label:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: 35,
      },
      {
        id: 3,
        name: "article 3",
        label:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: 45,
      },
    ],
  },
  card: {
    cardItems: [],
  },
};

const SET_PRODUCTS = "SET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const SET_SOL = "SET_SOL";
const LOAD_MORE = "LOAD_MORE";

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        data: [...state.data.products, ...action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        data: [...state.data.products, ...action.payload],
      };
    case SET_SOL:
      return {
        ...state,
        sol: action.payload,
      };
    case LOAD_MORE:
      return {
        ...state,
        data: {
          photos: [...state.data.photos, ...action.payload],
        },
      };
    default:
      return state;
  }
};

export const setPhotosAction = (payload) => ({
  type: SET_PRODUCTS,
  payload,
});
export const setRoverAction = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});
export const setCameraAction = (payload) => ({
  type: REMOVE_PRODUCT,
  payload,
});
export const setSolAction = (payload) => ({
  type: SET_SOL,
  payload,
});
export const setLoadMoreAction = (payload) => ({
  type: LOAD_MORE,
  payload,
});
