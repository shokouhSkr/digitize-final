import React from "react";

import { ProductColors } from "../components";
import { Link } from "react-router-dom";
import { products } from "../data";
import { FiHeart } from "react-icons/fi";

const Products = () => {
  // products => filtered products
  return (
    <section className="col-span-12 mb-24 grid grid-cols-2 gap-x-4 gap-y-8 px-[5%] md:col-span-9 md:grid-cols-3 md:px-0 2xl:grid-cols-5 3xl:col-span-10">
      {products.map((product) => {
        const { image, company, id, price, title, colors } = product;

        return (
          <div className="rounded-lg bg-white p-1.5 text-sm shadow-md">
            <div className="relative mb-4 flex items-center justify-center rounded-lg bg-[#e2e2e2]">
              <button
                className="absolute top-2 right-1 rounded-full bg-[#afafaf] p-1 px-1.5"
                onClick
              >
                <FiHeart className="w-2.5 fill-[#ff755c] stroke-[#ff755c]" />
              </button>
              <div className="my-2 w-40">
                <img src={image} alt={title} />
              </div>
            </div>

            <div className="px-2">
              <div className="mb-2 flex justify-between">
                <span className="text-xs font-light text-gray-200">{company}</span>
                <ProductColors colors={colors} width="w-4" height="h-4" />
              </div>

              <div className="mb-1 border-b border-gray-100 pb-2">
                <p className="mb-2 flex items-center justify-start text-[11px] text-slate-800 xs:text-[13px] lg:text-sm">
                  {title}
                </p>
                <p className="flex items-center justify-end text-[11px] text-red-600 xs:text-[13px]">
                  {price} تومان
                </p>
              </div>

              <button type="button" className="mx-auto flex items-center justify-center py-2">
                <Link
                  to={`products/${id}`}
                  className="flex-1 text-center text-xs text-[#ff755c] xs:text-[14px]"
                >
                  مشاهده و ثبت سفارش
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Products;
