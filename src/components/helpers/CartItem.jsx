import { useState, useEffect } from "react";
import deleteIcon from "../../assets/ic_delete.svg";

export default function CartItem({ data, callbackFn, deleteFn }) {
  const [qty, setQty] = useState(data.qty);

  const { title, category, price, discountPercentage, rating, thumbnail } =
    data;
  const changeQTY = (qty) => {
    callbackFn({ data, qty: Number(qty) });
    setQty(qty);
  };
  return (
    <div className="h-40 bg-black text-gray-200 shadow shadow-gray-600 m-5 p-2 rounded-xl ">
      <div className="flex flex-row ">
        <img src={thumbnail} className="w-1/3 h-full" />
        <div className="w-2/3 flex flex-col pl-2">
          <span className="text-lg line-clamp-2">{title}</span>
          <span className="flex flex-row mt-auto">
            <span className="pl-2 font-semibold text-white">$ {price}</span>
            <span className="ml-auto">Discount: {discountPercentage}%</span>
          </span>
          <div className="flex flex-row mx-2 mt-2">
            <div className="mr-auto mt-2">
              <span
                className="px-3.5 py-2 border-2 cursor-pointer rounded-full border-white"
                onClick={() => {
                  changeQTY(Number(qty) + 1);
                }}
              >
                +
              </span>
              <input
                type="number"
                className="w-14 py-1 rounded mx-4 text-black px-2"
                onChange={(e) => {
                  changeQTY(e.target.value > 0 ? e.target.value : 0);
                }}
                style={{ textAlign: "center" }}
                id={data._id}
                value={qty}
              />
              <span
                className="px-3.5 py-2 border-2 cursor-pointer rounded-full border-white"
                onClick={() => {
                  changeQTY(Number(qty) - 1);
                }}
              >
                -
              </span>
            </div>
            <img
              className="w-10 h-10 p-2 mt-1 rounded-full bg-red-600 hover:bg-red-800 shadow"
              type="image/svg+xml"
              src={deleteIcon}
              onClick={() => {
                deleteFn(data);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
