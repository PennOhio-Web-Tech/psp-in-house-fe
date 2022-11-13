const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
})

export function currencyFormatter(number: number) {
	return formatter.format(number)
}
