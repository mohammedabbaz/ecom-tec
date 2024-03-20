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
    // images:any,
    price:number,
    slugs:string,
    details:string,
}