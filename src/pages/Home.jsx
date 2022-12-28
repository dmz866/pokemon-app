import { PokemonList } from '../components/Pokemon/PokemonList';
import { POKEMON_API_URL } from '../constants/constants';
import { useGetPokemonList } from '../hooks/usePokemon';

export function Home() {
	const pokemons = useGetPokemonList(POKEMON_API_URL);

	return (
		<div>
			{!pokemons && <label>Loading....</label>}
			<PokemonList pokemons={pokemons} />
		</div>
	)
};