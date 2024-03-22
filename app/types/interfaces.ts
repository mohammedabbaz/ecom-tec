import { Image } from "sanity"

export type  Banner ={
    _id :string,
    smalltitle:string,
    description:string,
    image:Image,
    productId:string
}

export type Product={
    _id :string,
    title:string,
    images:[Image],
    price:number,
    slugs:string,
    details:string,
}


export type CartItem={
    // _id :string,
    product:Product
    quantity:number,
   
}