import React from "react";

import { Link } from "react-router-dom";
import { SingleCartItem } from "../components";

const CartItems = () => {
  const cart = ["one", "two", "three", "four", "five", "six"];

  return (
    <section className="mb-8 h-2/3 overflow-scroll md:basis-3/5">
      {/* mobile */}
      {cart.map((item) => (
        <div className="mb-3 rounded-md bg-[#fdfdfd] p-3 text-sm shadow md:mb-0 md:hidden">
          <SingleCartItem />
        </div>
      ))}

      {/* laptop */}
      <div className="mb-3 hidden items-center justify-between bg-transparent px-3 py-1.5 md:flex">
        <Link to="/" className="text-lg font-medium text-slate-800">
          سبد‌ خرید
        </Link>
        <Link to="/" className="text-sm text-red-400">
          بازگشت به خانه
        </Link>
      </div>
      <div className="hidden flex-col rounded-md bg-[#fdfdfd] p-3 text-sm md:flex">
        {cart.map((item, i) => (
          <SingleCartItem />
        ))}
      </div>
    </section>
  );
};

export default CartItems;