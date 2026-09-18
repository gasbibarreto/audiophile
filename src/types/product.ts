import type { Category, CategoryBreakpoint } from './category'
import type { Gallery, ImageSet } from './image'

export interface Product {
  id: number
  slug: string
  name: string
  image: ImageSet
  category: Category
  categoryImage: CategoryBreakpoint
  new: boolean
  price: number
  description: string
  features: string
  includes: {
    quantity: number
    item: string
  }[]
  gallery: Gallery
  others: {
    slug: string
    name: string
    image: ImageSet
  }[]
}
