"use client"
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

import { useState } from "react";

type inAppType = {
  images: any;
};

export default function ProductImages({ images }: inAppType) {
  // state to change big image of product

  const [bigImage, setBigImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
    
      {/* big image  */}
      <div className="relative rounded-lg lg:col-span-4 overflow-hidden bg-gray-100 p-8">
        <Image
          src={urlForImage(bigImage)}
          alt="product image "
          width={500}
          height={500}
          priority
          className="w-full h-[300px] object-center  "
        />
      </div>
        {/* list of images of product exit in left in large screen and on top in small screen */}
        <div className=" grid grid-cols-4 gap-4 ">
        
        {images.map((image: any, index: any) => (
          <div key={index} className="overflow-hidden rounded-lg  hover:bg-primary  bg-gray-100 p-2 h-24 ">
            <Image
              src={urlForImage(image)}
              alt="product image "
              width={400}
              height={400}
              className="w-full h-full cursor-pointer object-center"
              // onClick={()=>setBigImage(image)}
              onMouseEnter={()=>setBigImage(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
