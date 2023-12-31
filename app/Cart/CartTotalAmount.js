import { getTotal } from "@/Redux/CartSlice";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const CartTotalAmount = () => {
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.cart.CART_PRODUCT);
  const { CART_AMOUNT } = useSelector((state) => state.cart);

  dispatch(getTotal());

  //   useEffect(() => {
  //     dispatch(getTotal());
  //   }, [Cart, dispatch]);
  return (
    <div>
      <div className="flex justify-start md:justify-end">
        SubTotal : ₹<span className="font-bold"> {CART_AMOUNT}</span>
      </div>
    </div>
  );
};

export default CartTotalAmount;
