import { useEffect, useState } from 'react';
import { PokemonList } from '../components/Pokemon/PokemonList';
import { POKEMON_API_URL } from '../constants/constants';

export function Home() {
	const [pokemons, setPokemons] = useState(undefined);
	const getPokemonList = async () => {
		const result = await fetch(POKEMON_API_URL);
		const data = await result.json();
		setPokemons(data.results);
	};

	useEffect(() => {
		getPokemonList();
	}, []);

	return (
		<div>
			{!pokemons && <label>Loading....</label>}
			<PokemonList pokemons={pokemons} />
		</div>
	)
};