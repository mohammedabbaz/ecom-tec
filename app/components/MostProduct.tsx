import { getProducts } from "@/lib/ProductApi";
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types/interfaces";

export default async function MostProduct() {
  const mostProduct: Product[] = await getProducts();

  // console.log(mostProduct)
  return (
    <section className="mx-auto text-center py-6 md:py-12">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl   ">
      Most sellers  Products 
      </h2>

      <ul className="mt-8 grid gap-4  sm:grid-cols-2 lg:grid-cols-4 text-start  mx-24  place-content-center" >
        {mostProduct.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ul>
    </section>
  );
}
