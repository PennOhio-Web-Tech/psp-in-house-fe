export type Topping = {
	id: string
	name: string
	priceSmall: number
	priceMedium: number
	priceLarge: number
	createdAt: string
	updatedAt: string
}

export type Product = {
	id: string
	name: string
	price: number
	description: string
	createdAt: string
	updatedAt: string
	categoryId: string
	topping: Topping[]
}

export type Menu = {
	id: string
	name: string
	description: string
	createdAt: string
	updatedAt: string
	menuId: string
	products: Product[]
}[]

export type Pizza = {
	size: 'small' | 'medium' | 'large'
	price: number
	toppings: Topping[]
}

export type Order = { product: Product; quantity: number }[]
