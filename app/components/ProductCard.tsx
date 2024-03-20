import React from "react";
import { Product } from "../types/interfaces";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

export default function ProductCard({ product }: { product: Product }) {
  return (

     
        <Link href={"/product/"+product._id} className="group block overflow-hidden rounded-xl border p-2 hover:shadow-sm">
          <img
            src={urlForImage(product.images[0])}
            alt=""
            className="h-[180px]  w-full object-center transition duration-500 group-hover:scale-105 "
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs truncate text-gray-700 ">
              {product.title}
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> £{product.price} </span>
            </p>
          </div>
        </Link>
     

     
  );
}
