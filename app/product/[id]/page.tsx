

import ProductCard from "@/app/components/ProductCard";
import ProductDetails from "@/app/components/ProductDetails";
import ProductImages from "@/app/components/ProductImages";
import SeeMore from "@/app/components/seeMore";
import { useStateContsext,  } from "@/app/context/StateContext";
import { Product } from "@/app/types/interfaces";
import { Button } from "@/components/ui/button";
import { getProduct, getSimilarProduct } from "@/lib/ProductApi";






export default async function page({ params }: { params: { id: string } }) {



  // get product product
  const product: Product = await getProduct(params.id);
  // get similar product
  const similarProducts: Product[] = await getSimilarProduct(product.slugs);



  

  return (
    <div className="container my-16 space-y-4">
      {/* <div className="flex flex-col w-full  "> */}
      <div className="grid md:grid-cols-2 gap-8 w-full">
        {/* images gallery */}
        <ProductImages images={product.images} />
        {/* product details */}

       <ProductDetails product={product} />
     
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
