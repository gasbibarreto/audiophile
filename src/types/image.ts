export type Breakpoint = 'mobile' | 'tablet' | 'desktop'

export type ImageSet = Record<Breakpoint, string>

export interface Gallery {
  first: ImageSet
  second: ImageSet
  third: ImageSet
}
