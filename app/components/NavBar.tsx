"use client"
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

import { Cart } from "./Cart";

export default function NavBar() {

  return (
    <div className="">
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
