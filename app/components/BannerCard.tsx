"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Banner } from "../types/interfaces";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BannerCard({ banners }: { banners: Banner[] }) {
  return (
    <Carousel className="h-full w-full ">
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem key={index}>
            <Card className=" relative shadow-none border-none ">
              <div className="w-full h-20">

              </div>
              <CardContent className="flex items-center h-full justify-between md:px-12 bg-primary rounded-lg py-10 px-2">
                <div className="flex flex-col gap-2 md:w-2/3 w-2/4">
                  <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                    {banner.smalltitle}
                  </h1>
                  <h3 className="text-sm md:text-lg lg:text-2xl font-bold">
                    {banner.description}
                  </h3>
                  <Link href={"/product/" + banner.productId}>
                    <Button variant={"outline"} className="text-sm  mt-2 ">
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
                  className="size-[200px] object-cover md:size-[250px] absolute md:right-4 right-1 md:-top-2 -top-1  z-20 lg:size-[300px]  " 
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
