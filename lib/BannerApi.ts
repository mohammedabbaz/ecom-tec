import { Banner } from "@/app/types/interfaces"
import { client } from "@/sanity/lib/client"

export async function getBanners() {
    const posts = await client.fetch(`*[_type == "banner"]{
      _id,
        smalltitle,
        description,
        image,
        "productId":product->_id,
        
      
      
    }`)
    return posts as Banner[]
  }