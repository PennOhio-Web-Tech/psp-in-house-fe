import { Menu } from '@src/@types/Menu'
import { nanoid } from 'nanoid'

const pizzaId = nanoid(6)
const saladId = nanoid(6)
const appetizerId = nanoid(6)
const wingId = nanoid(6)
const desertId = nanoid(6)

export const FakeMenu: Menu = [
	{
		category: 'pizza',
		id: pizzaId,
		products: [
			{
				name: 'Small Pizza',
				description: '8 inch pizza',
				price: 8.0,
			},
			{
				name: 'Medium Pizza',
				description: '12 inch pizza',
				price: 10.0,
			},
			{
				name: 'Large Pizza',
				description: '14 inch pizza',
				price: 12.0,
			},
		],
	},
	{
		category: 'appetizer',
		id: appetizerId,
		products: [
			{
				name: 'Breadsticks',
				description: 'order of 5 garlicy breadsticks',
				price: 6.0,
			},
			{
				name: 'Garlic Knots',
				description: 'order of a dozen bread knots with a garlicy glaze',
				price: 6.0,
			},
			{
				name: 'Mozzerella sticks',
				description: 'order of 5 premium cheesy sticks',
				price: 6.0,
			},
		],
	},
	{
		category: 'salad',
		id: saladId,
		products: [
			{
				name: 'Caesar Salad',
				description: 'lettuce, croutons, parmasean cheese, with signature caesar dressing',
				price: 8.0,
			},
			{
				name: 'Chicken Salad',
				description:
					'lettuce, french fries, chicken, and croutons with your choice of dressing',
				price: 10.0,
			},
			{
				name: 'House Salad',
				description: 'Lettuce, cheese, tomatoes, cucumbers, onions, and dressing, ',
				price: 8.0,
			},
		],
	},
	{
		category: 'wings',
		id: wingId,
		products: [
			{
				name: '6 wings',
				description: '6 wings with customer choice of sauce',
				price: 8.0,
			},
			{
				name: '8 wings',
				description: '8 wings with customer choice of sauce',
				price: 9.0,
			},
			{
				name: '10 wings',
				description: '10 wings with customer choice of sauce',
				price: 10.0,
			},
		],
	},
	{
		category: 'desert',
		id: desertId,
		products: [
			{ name: 'Pizookie', description: 'giant cookie baked in a pan', price: 7.0 },
			{ name: 'Brownie', description: 'tasty ooie gooey brownie', price: 3.0 },
		],
	},
]
