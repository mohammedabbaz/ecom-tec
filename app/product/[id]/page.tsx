"use client";
import ProductCard from "@/app/components/ProductCard";
import ProductImages from "@/app/components/ProductImages";
import SeeMore from "@/app/components/seeMore";
import { Product } from "@/app/types/interfaces";
import { Button } from "@/components/ui/button";
import { getProduct, getSimilarProduct } from "@/lib/ProductApi";
import { CircleMinus, CirclePlus, Star, Truck } from "lucide-react";
import React, { useState } from "react";

export default async function page({ params }: { params: { id: string } }) {
  // get product product
  const product: Product = await getProduct(params.id);
  // get similar product
  const similarProducts: Product[] = await getSimilarProduct(product.slugs);

  // const [quantity, setQuantity] = useState(0);

  return (
    <div className="container mt-4 mb-4 space-y-4">
      {/* <div className="flex flex-col w-full  "> */}
      <div className="grid md:grid-cols-2 gap-8 w-full">
        {/* images gallery */}
        <ProductImages images={product.images} />
        {/* product */}

        <div className="py-6 flex flex-col space-y-3 text-start">
          {/* title and category name */}
          <div className="mb-2 space-y-2 md:mb-3">
            <h3 className="text-muted-foreground text-sm capitalize leading-3 font-medium">
              {product.slugs}
            </h3>
            <h2 className="text-lg md:text-2xl font-semibold">
              {product.title}
            </h2>
          </div>
          {/* ratings */}
          <div className="flex mb-2 md:mb-3 gap-3  items-center ">
            <div className="flex gap-2 items-center justify-center rounded-lg bg-primary text-white font-medium px-2 py-1">
              4.5
              <span>
                <Star className="size-4" />
              </span>
            </div>
            {/* rattings */}
            <p className="text-sm text-muted-foreground">52 Rattings</p>
          </div>
          {/* price */}
          <div className="mb-2 md:mb-3">
            <div className="flex gap-3 items-center">
              {/* price  */}
              <span className="font-bold text-xl md:text-2xl">
                $ {product.price}
              </span>
              {/* price plus shopping */}
              <span className="line-through text-red-500">
                $ {product.price + 10}
              </span>

              <span className="text-muted-foreground">
                Total price and shipping
              </span>
            </div>
          </div>
          {/* shipping date  */}
          <div className="mb-3 md:mb-6 flex gap-3 items-center text-muted-foreground">
            <Truck />
            <span className="text-sm">2-4 Day shipping</span>
          </div>

          {/* quantity button  */}

          <div className="flex  gap-4 items-center justify-start">
            <span className="text-sm">Quantity : </span>
            <div className="flex space-x-2 items-center justify-center text-center rounded-lg border ">
              {/* <CircleMinus
                  className="size-5"
                  onClick={() => quantity > 0 && setQuantity(quantity - 1)}
                />
                <p className="  text-xl font-bold">{quantity}</p>
                <CirclePlus
                  className="size-5"
                  onClick={() => setQuantity(quantity + 1)}
                /> */}
            </div>
          </div>
          {/* add to cart button and checkout button */}
          <div className="flex  gap-3 my-6 md:my-12">
            <Button className="text-sm capitalize">Add to cart</Button>
            <Button className="text-sm capitalize">buy now</Button>
          </div>
          {/* description  */}
          <div className="flex flex-col gap-2">
            <span className="text-sm">Details : </span>
            <p className="text-base text-gray-500 tracking-wide line-clamp-5">
              {product.details}
            </p>
            {product.details.length > 500 && (
              <SeeMore details={product.details} />
            )}
          </div>
        </div>
        {/* similar product */}
      </div>
      {/* similar product  */}
      <section className="w-full h-full mt-12 ">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl   ">
          Similar Products
        </h2>

        <ul className="mt-8 grid gap-4  sm:grid-cols-2 lg:grid-cols-4 text-start  w-full">
          {similarProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ul>
      </section>
    </div>
    // </div>
  );
}
