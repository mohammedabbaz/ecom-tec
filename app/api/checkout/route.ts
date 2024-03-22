
import { CartItem } from "@/app/types/interfaces";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export const POST = async(request:any )=>{


  const {cartItems} = await request.json()
const data:CartItem[] = cartItems;



  const params ={
    submit_type:"pay",
    line_items: data.map((item:CartItem)=>{
      const image = item.product.images[0].asset?._ref as string
      // transform image to https 
      const newimage =image.replace('image-' , "https://cdn.sanity.io/images/njd6ckt3/production/").replace('-png' , '.png')
 
      const  title = item.product.title
      const quantity = item.quantity
      const price = item.quantity * item.product.price

        // console.log( newimage)
        
      return {
         price_data: {
            currency:'usd',
            product_data:{
              name:title,
              images:[newimage]
            },
            unit_amount:item.product.price*100
          }, adjustable_quantity: {
              enabled:true,
              minimum:1
          },
          quantity:quantity
      }
       
      
    }),
    mode: 'payment',

    success_url: `${request.url}/success`,
    cancel_url: `http://localhost:3000/`,
  }


  const session = await stripe.checkout.sessions.create(params);


// send checkout url to cart handelpage in cart component
// return NextResponse.json({url:session.url})
// send session
return NextResponse.json({session:session})




}
