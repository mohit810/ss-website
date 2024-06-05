import { useState, useReducer, useEffect } from "react";
import PageSelector from "./helpers/PageSelector";
import Cart from "./Cart";
import ProductList from "./ProductList";
import { productReducer } from "../utils/redux";
import { CartTotalProvider } from "../utils/Context";

export default function Dashboard() {
  const [pageNum, setPageNum] = useState(1);
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    cart: [],
  });

  return (
    <div className="h-screen p-2">
      <CartTotalProvider>
        <div className="flex flex-row">
          <ProductList pageNum={pageNum} state={state} dispatch={dispatch} />
          <div className="w-1/3 h-max m-5 rounded-lg bg-slate-200">
            <Cart state={state} dispatch={dispatch} />
          </div>
        </div>
      </CartTotalProvider>

      <>
        <PageSelector
          pagecount={Math.ceil(state.products.length / 12)}
          currentPage={pageNum}
          setPage={(d) => setPageNum(d)}
        />
      </>
    </div>
  );
}
