import { Product } from "@/app/types/interfaces"
import { client } from "@/sanity/lib/client"

export async function getProducts() {
    const res = await client.fetch(`*[_type == "product"][0..8]{
        _id,
          title,
          details,
          images,
          "slugs":slug.current
          ,price
          
        
      
    }`)
    return res as Product[]
  }


export  async function getProduct(id:string) {
const res = await client.fetch(`*[_type == "product"&& _id =="${id}"][0]{
  _id,
  title,
  details,
  images,
  "slugs":slug.current
  ,price
  
    
  

}`)
return res as Product
  }


  export  async function getSimilarProduct(slug:string) {
    const res = await client.fetch(`*[_type == "product"&& slug.current =="${slug}"]{
      _id,
      title,
      details,
      images,
      "slugs":slug.current
      ,price
      
        
      
    
    }`)
    return res as Product[]
      }
    