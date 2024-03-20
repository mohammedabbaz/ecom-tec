import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Image from "next/image";
import { getBanners } from "@/lib/BannerApi";
import { Banner } from "../types/interfaces";
import { urlForImage } from "@/sanity/lib/image";
import { BannerCard } from "./BannerCard";

export default async function HeaderBanner() {
  const banners: Banner[] = await getBanners();

  return (
    <div className="w-full mt-4  ">
      <BannerCard banners={banners} />
    </div>
  );
}
