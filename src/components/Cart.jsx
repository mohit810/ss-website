import { useEffect } from "react";
import CartItem from "./helpers/CartItem";
import { updateQty, removeFromCart } from "../utils/redux";
import { debounce } from "../utils/CommonFunctions";
import { useTotal } from "../utils/Context";

export default function Cart({ state, dispatch }) {
  const { total, updateTotal } = useTotal();
  const { cart } = state;
  useEffect(() => {
    updateTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);

  const callbackFn = ({ data, qty }) => {
    debounce(updateQty(dispatch, { ...data, qty }, total), 500);
  };

  const deleteFn = (product) => {
    removeFromCart(dispatch, product);
  };

  return (
    <div className="flex flex-col h-screen p-1">
      <div className=" h-[95%]">
        <div className="max-h-[95%] overflow-auto">
          {cart.length > 0 ? (
            cart.map((item, i) => (
              <CartItem
                data={item}
                key={item._id}
                callbackFn={callbackFn}
                deleteFn={deleteFn}
              />
            ))
          ) : (
            <div className="mx-auto my-10 w-max text-gray-600 text-lg font-semibold">
              Cart is Empty
            </div>
          )}
        </div>
      </div>
      <div className="h-[5%] flex flex-col">
        <span className="w-full flex-grow border-t border-gray-400 " />
        <div className="grid grid-cols-2 m-2">
          <div className="px-2 font-bold">Total:</div>
          <div className="px-2 font-bold ml-auto">$ {Math.floor(total)}</div>
        </div>
      </div>
    </div>
  );
}
