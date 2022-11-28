export function capitalizeFirstLetter(string: string) {
	const words = string.split(' ')

	for (let i = 0; i < words.length; i++) {
		if (words[i] === '') {
			return words.join('')
		}
		words[i] = words[i][0].toUpperCase() + words[i].substr(1)
	}

	return words.join(' ')
}
