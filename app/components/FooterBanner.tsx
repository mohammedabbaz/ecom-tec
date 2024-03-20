import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Banner } from "../types/interfaces";
import { getBanners } from "@/lib/BannerApi";

export default async function FooterBanner() {
  const banners: Banner[] = await getBanners();

  const banner = banners[0];

  return (
    <div className=" w-full h-[300px] rounded-full relative ">
      <Card>
        <CardContent className="flex items-center justify-between ">
          <div className="flex flex-col gap-2 w-2/4">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
              {banner.smalltitle}
            </h1>
            <h3 className="text-sm md:text-lg lg:text-2xl font-bold">
              {banner.description}
            </h3>
            <Link href={"/product/" + banner.productId}>
              <Button variant={"default"} className="text-sm  mt-2 ">
                Shop Now
              </Button>
            </Link>
          </div>
          {/* image of banner */}
          <Image
            src={urlForImage(banner.image)}
            alt=""
            width={200}
            height={200}
            className="size-[200px] object-cover md:size-[250px] z-10 lg:size-[300px]  "
          />
          <div className="md:flex flex-col gap-2 w-1/4 hidden ">
            
            <h3 className="text-sm md:text-lg lg:text-2xl font-bold">
              {banner.description}
            </h3>
            
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
