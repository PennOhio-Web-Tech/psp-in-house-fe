export type AddCategoryType = {
	name: string
	description: string
}

export type AddProductType = {
	name: string
	description: string
	price: string
	id: string
}
const options = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
}
export async function getMenu() {
	return await fetch('http://localhost:4040/api/v1/menu/getMainMenu', options)
}

export async function addCategory(body: AddCategoryType) {
	return await fetch('http://localhost:4040/api/v1/menu/category', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(body),
	})
}

export async function addProduct(body: AddProductType) {
	return await fetch(`http://localhost:4040/api/v1/menu/${body.id}/product`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			name: body.name,
			description: body.description,
			price: Number(body.price),
		}),
	})
}
