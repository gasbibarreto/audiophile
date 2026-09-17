import type { Category, CategoryBreakpoint } from "./Category"
import type { Breakpoint, Gallery, ImageSet } from "./Image"

export interface Product {
  id: number
  slug: string
  name: string
  image: Breakpoint
  category: Category
  categoryImage: CategoryBreakpoint
  new: boolean
  price: number
  description: string
  features: string
  includes: Array<{
    quantity: number
    item: string
  }>
  gallery: Gallery
  others: Array<{
    slug: string
    name: string
    image: ImageSet
  }>
}
