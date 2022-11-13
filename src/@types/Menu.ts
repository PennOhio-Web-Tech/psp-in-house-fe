export type Product = { name: string; description: string; price: number }
export type Menu = { category: string; id: string; products: Product[] }[]
export type Order = { product: Product; quantity: number }[]
