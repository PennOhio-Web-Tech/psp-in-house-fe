import { z } from 'zod'

export const orderCreateInputValidator = z.object({
	subtotal: z.number().positive(),
	tax: z.number().positive(),
	total: z.number().positive(),
	paidWith: z.string(),
	products: z.array(
		z.object({
			productName: z.string(),
			productPrice: z.number().positive(),
			toppings: z.array(z.string()),
		})
	),
})

export type OrderCreateInput = z.infer<typeof orderCreateInputValidator>
