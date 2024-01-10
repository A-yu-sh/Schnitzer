import { getTotal } from "@/Redux/CartSlice";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const CartTotalAmount = () => {
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.cart.CART_PRODUCT);
  const { CART_AMOUNT } = useSelector((state) => state.cart);
  localStorage.setItem("Total", JSON.stringify(CART_AMOUNT));

  dispatch(getTotal());

  //   useEffect(() => {
  //     dispatch(getTotal());
  //   }, [Cart, dispatch]);
  return (
    <div className="border-2  mt-10 w-full md:w-[70%] p-5 h-fit">
      <p>Price Details ({Cart.length} items)</p>
      {Cart.map((e) => {
        return (
          <div className="flex w-auto md:grid grid-cols-1 mt-2 md:grid-cols-3 border rounded-lg p-7">
            <div className="px-5">{e.name}</div>
            <div className="ml-auto md:ml-0 flex justify-end">{e.Quantity}</div>
            <div className="ml-auto md:ml-0 flex justify-end">{e.price}/pc</div>
          </div>
        );
      })}
      <hr className="mt-3" />
      <div className="flex justify-start md:justify-end">
        SubTotal : $<span className="font-bold"> {CART_AMOUNT}</span>
      </div>
    </div>
  );
};

export default CartTotalAmount;
