export function getPokemonId(url) {
	const arr = url?.split('/');
	return arr[arr.length - 2] || undefined;
}