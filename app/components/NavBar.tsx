"use client"
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

import { Cart } from "./Cart";

export default function NavBar() {


  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = (e:any) => {
    setScrollTop(e.target.documentElement.scrollTop);
    setScrolling(e.target.documentElement.scrollTop > scrollTop);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  },[]);
  

  return (
    <div className={`${scrolling?'shadow-sm bg-white dark:bg-black':""} fixed top-0 left-0 right-0 z-30`}>
      <div className="container w-full h-full flex items-center justify-between py-4  text-xl">
       <Logo/>
        {/* shopping cart and login button */}
        <div className="flex gap-6 items-center justify-center">
            {/* shopping cart  */}
            <Cart/>
            {/* login button  */}

            <img src="https://avatar.vercel.sh?text=GR" alt=""  className="size-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}
