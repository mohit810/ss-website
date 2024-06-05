import deleteIcon from "../../assets/ic_delete.svg";

export default function Product({ data, addToCart, cartItems, deleteFn }) {
  const { title, category, price, discountPercentage, rating, thumbnail } =
    data;
  return (
    <div className="h-40 bg-black text-gray-200 shadow shadow-gray-600 m-5 p-2 rounded-xl ">
      <div className="flex flex-row h-full">
        <img src={thumbnail} className="w-1/3 h-full" />
        <div className="w-2/3 flex flex-col pl-2">
          <span className="text-lg">{title}</span>
          <div className="flex flex-row">
            <span className="pl-2 text-gray-400">
              -{category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
            <span className="ml-auto">Rating: {rating}/5</span>
          </div>
          <span className="flex flex-row mt-auto">
            <span className="pl-2 font-semibold text-white">$ {price}</span>
            <span className="ml-auto">Discount: {discountPercentage}%</span>
          </span>
          {cartItems.some((ele) => ele._id === data._id) ? (
            <div
              className="w-2/3 h-[40px] cursor-pointer my-2 font-semibold bg-red-600 rounded-lg shadow-sm shadow-gray-900 hover:bg-red-800"
              onClick={() => deleteFn(data)}
            >
              <div className="w-max h-full flex flex-row m-auto">
                <img
                  className="w-8 h-8 p-1.5 my-auto"
                  type="image/svg+xml"
                  src={deleteIcon}
                />
                <span className="my-auto font-semibold text-lg">Delete</span>
              </div>
            </div>
          ) : (
            <div
              className="w-2/3 h-[40px] my-2 flex cursor-pointer font-semibold bg-teal-600 rounded-lg shadow-sm shadow-gray-900 hover:bg-green-700"
              onClick={() => addToCart(data)}
            >
              <span className="w-max h-max m-auto">Add To Cart</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
