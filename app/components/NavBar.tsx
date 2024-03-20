import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <div className="">
      <div className="container w-full h-full flex items-center justify-between py-4  text-xl">
       <Logo/>
        {/* shopping cart and login button */}
        <div className="flex gap-6 items-center justify-center">
            <div className="flex relative">
            <ShoppingBagIcon className=""/>
            <span className=" rounded-full  bg-primary text-white text-[5px] items-center justify-center flex absolute size-3 -top-1 -right-1 ">{0}</span>
            </div>
            {/* login button  */}

            <img src="https://avatar.vercel.sh?text=GR" alt=""  className="size-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}
