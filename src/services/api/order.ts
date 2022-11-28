import { OrderCreateInput } from '../validators/orders'

export async function addOrder(order: OrderCreateInput) {
	const orderRes = await fetch('http://localhost:4040/api/v1/orders/', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(order),
	})

	if (!orderRes.ok) {
		throw new Error('Network response was not ok')
	}

	const data = await orderRes.json()
	return data
}
const options = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
}
export async function getOrders() {
	return await fetch('http://localhost:4040/api/v1/orders/all', options)
}

export async function deleteOrder(id: string) {
	return await fetch(`http://localhost:4040/api/v1/orders/${id}`, {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'DELETE',
	})
}
