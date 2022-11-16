const options = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
}
export async function getMenu() {
	return await fetch('http://localhost:4040/api/v1/menu/getMainMenu', options)
}
