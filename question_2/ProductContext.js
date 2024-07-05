// context/ProductContext.js
import React, { createContext, useReducer } from "react";

const ProductContext = createContext();

const initialState = {
  products: [],
  filters: {},
  sorting: "price",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_FILTERS":
      return { ...state, filters: action.payload };
    case "SET_SORTING":
      return { ...state, sorting: action.payload };
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
