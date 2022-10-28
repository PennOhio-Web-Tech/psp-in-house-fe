export function getIsServer() {
	return typeof window === 'undefined'
}
