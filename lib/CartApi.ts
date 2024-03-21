import { Product } from "@/app/types/interfaces"
import { client } from "@/sanity/lib/client"

export  async function create({product,quantity }:{product:Product , quantity:number}) {
    const res = await client.create({
        _type: "cartItem",
        quantity: quantity,
        product:product,
        
        
      })
    return res 
      }