import { type SchemaTypeDefinition } from 'sanity'
import Product from './schemas/Product'
import Banner from './schemas/Banner'
import CartItem from './schemas/CartItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Product,Banner,CartItem
  ],
}
