"use client";
import { Button } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CircleX, ShoppingBagIcon } from "lucide-react";
import { useStateContsext } from "../context/StateContext";
import { CartItem } from "../types/interfaces";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

export function Cart() {
  const { totalQuantities, CartItems, totalPrise, changeQty, deleteCartItem ,    showCart , 
    setShowCart } =
    useStateContsext();

  // check out function

  const handleCheckOut = async () => {
    try {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
      );

      if (!stripe) throw new Error("Stripe failed to initialize.");

      const checkoutResponse = await fetch(
        "http://localhost:3000/api/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cartItems: CartItems }),
        }
      )
        .then((response) => {
          return response.json()
        }).then((res)=>{
          
          if(res.session){
            // redirect to checkout page 
            // redirect(res.url)
            // window.location.href=res.url;
            // redirect to checkout page using session id
            stripe.redirectToCheckout({sessionId:res.session.id})
          }
          
          
          
        })
        .catch((err: any) => {
          console.log(err);
        });
   
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Sheet open={showCart}  onOpenChange={(value)=>{setShowCart(value)}} >
      <SheetTrigger asChild>
        <div className="flex relative cursor-pointer">
          <ShoppingBagIcon className="" />
          {totalQuantities > 0 && (
            <span className=" rounded-full  bg-primary text-white text-[5px] items-center justify-center flex absolute size-3 -top-1 -right-1 ">
              {totalQuantities}
            </span>
          )}
        </div>
      </SheetTrigger>
      <SheetContent>
        {CartItems.length == 0 ? (
          <div className="h-full w-full flex flex-col justify-center items-center ">
            <ShoppingBagIcon className=" size-40" />
            <p>Your shipping cart is empty</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 w-full overflow-y-auto p-2  h-full">
            {CartItems.map((cart: CartItem, index: number) => {
              const quantity = cart.quantity;

              return (
                <div
                  key={index}
                  className="flex items-center w-full rounded-lg shadow-md  justify-between relative"
                >
                  <Link key={index} href={"/product/" + cart.product._id}>
                    <div className="flex gap-2 px-1 py-3 items-center justify-center w-4/5">
                      <div className="flex-shrink-0">
                        <img
                          src={urlForImage(cart.product.images[0])}
                          alt={cart.product.title}
                          className=" size-12 md:size-24 rounded-md  object-center"
                        />
                      </div>

                      <div className="w-full flex  flex-col justify-between ">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="font-semibold  line-clamp-1">
                              {cart.product.title}
                            </h3>
                          </div>
                          <div className="mt-1 flex flex-row gap-2 text-sm">
                            <p className="text-xs font-medium text-gray-500 line-through">
                              $ {cart.product.price + 10}
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                              $ {cart.product.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="mb-2">
                    {/* quantity button */}
                    <div className=" flex">
                      <button
                        onClick={() =>
                          changeQty({
                            quantity: quantity,
                            cartitem: cart,
                            operation: "-",
                          })
                        }
                        type="button"
                        className="h-7 w-7"
                      >
                        -
                      </button>
                      <p className="mx-1 h-7 w-9 rounded-md border text-center">
                        {cart.quantity}
                      </p>
                      <button
                        onClick={() =>
                          changeQty({
                            quantity: quantity,
                            cartitem: cart,
                            operation: "+",
                          })
                        }
                        type="button"
                        className="flex h-7 w-7 items-center justify-center"
                      >
                        +
                      </button>
                    </div>

                    {/* remove button  */}
                    <button
                      type="button"
                      onClick={() => deleteCartItem({ cartitem: cart })}
                      className="flex items-center absolute top-0 right-1"
                    >
                      <CircleX size={12} className="text-red-500" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* buttons and total amount */}
            <div className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between">
                <h3>Discount :</h3>
                <h3>-£20</h3>
              </div>
              <div className="flex justify-between !text-base font-medium">
                <h3>Total amount :</h3>
                <h3>{totalPrise.toFixed(2)}</h3>
              </div>
            </div>
            <div className="space-y-4 flex flex-col text-center">
              <SheetClose asChild>
                <Button onClick={() => handleCheckOut()}>Checkout</Button>
              </SheetClose>

              <SheetClose asChild>
                <Link href={"/"}> Continue shopping</Link>
              </SheetClose>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
