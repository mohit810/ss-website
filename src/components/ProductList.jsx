import { useState, useEffect } from "react";
import Product from "./helpers/Product";
import {
  getProducts,
  addProductToCart,
  removeFromCart,
  getCartItems,
  productReducer,
} from "../utils/redux";
import { useTotal } from "../utils/Context";

export default function ProductList({ pageNum, state, dispatch }) {
  const { total, updateTotal } = useTotal();
  useEffect(() => {
    getProducts(dispatch);
    getCartItems(dispatch);
  }, []);
  const addToCart = (product) => {
    addProductToCart(dispatch, state.cart, product);
  };
  const deleteFn = (product) => {
    removeFromCart(dispatch, product);
  };
  return (
    <div className="w-2/3 grid grid-cols-2">
      {state.products.slice(12 * (pageNum - 1), 12 * pageNum).map((product) => {
        return (
          <Product
            data={product}
            key={product._id}
            cartItems={state.cart}
            addToCart={addToCart}
            deleteFn={deleteFn}
          />
        );
      })}
    </div>
  );
}
