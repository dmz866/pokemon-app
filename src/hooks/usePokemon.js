import { useEffect, useState } from "react";

export function useGetPokemonList(url) {
	const [pokemons, setPokemons] = useState(undefined);
	const getPokemonList = async () => {
		const result = await fetch(url);
		const data = await result.json();
		setPokemons(data.results);
	};

	useEffect(() => {
		getPokemonList();
	}, [url]);

	return pokemons;
}

