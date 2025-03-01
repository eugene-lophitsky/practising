import { createSlice } from '@reduxjs/toolkit';
import data from '../../data.json';
const productsInCart = JSON.parse(localStorage.getItem('products'));


export const cartSlice = createSlice({
  name: 'cart"',

  initialState: {
    allProducts: data,
    productsInCart: productsInCart || [],
    counter: 0,
  },

  reducers: {
    addProduct: (prevState, action) => {
      const product = action.payload;

      return {
        ...prevState,
        productsInCart: [...prevState.productsInCart, product],
      };
    },
    removeProduct: (prevState, action) => {
      const product = action.payload;

      return {
        ...prevState,
        productsInCart: prevState.productsInCart.filter((prevProduct) => {
          return prevProduct.id !== product.id;
        })
      };
    },

    incrementCounter:  (prevState, action) => {
      return {
        ...prevState,
        counter: prevState.counter + 1,
      };
    },
  },
});

export const { addProduct, removeProduct, incrementCounter } = cartSlice.actions;
export default cartSlice.reducer;
