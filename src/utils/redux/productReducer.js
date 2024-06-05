import React, { useState, useReducer } from "react";

export const productReducer = (initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...initialState,
        products: action.payload,
      };
    case "ADD_CART_ITEMS":
      var { ItemsList } = action.payload[0];
      return {
        ...initialState,
        cart: [...ItemsList],
      };
    case "ADD_TO_CART":
      return {
        ...initialState,
        cart: [...initialState.cart, { ...action.payload, qty: 1 }],
      };
    case "UPDATE_QTY":
      return {
        ...initialState,
        cart: initialState.cart.filter((c) =>
          c._id === action.payload._id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...initialState,
        cart: initialState.cart.filter((c) => c._id !== action.payload._id),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
