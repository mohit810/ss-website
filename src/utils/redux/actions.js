import { API_URL } from "../Constant";
import axios from "axios";

export async function getProducts(dispatch) {
  try {
    const ProductsList = await axios(API_URL + "products/");
    dispatch({ type: "ADD_PRODUCTS", payload: [...ProductsList.data] });
  } catch (error) {
    console.error(error.message);
  }
}

export async function addProductToCart(dispatch, cart, product) {
  try {
    const cartItems = await axios({
      method: "post",
      url: API_URL + `cart/save-cart?createdBy=user1`,
      data: {
        items: [...cart, { ...product, qty: 1 }],
      },
    });
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  } catch (error) {
    console.error(error.message);
  }
}

export async function updateQty(dispatch, product) {
  dispatch({ type: "UPDATE_QTY", payload: product });
}

export async function removeFromCart(dispatch, product) {
  dispatch({ type: "REMOVE_FROM_CART", payload: product });
}

export async function getCartItems(dispatch) {
  try {
    const CartList = await axios(API_URL + "cart?createdBy=user1");
    if (CartList.data.length > 0) {
      dispatch({ type: "ADD_CART_ITEMS", payload: [...CartList.data] });
    }
  } catch (error) {
    console.error(error.message);
  }
}
