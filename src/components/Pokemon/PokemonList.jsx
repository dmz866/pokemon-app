import { Pokemon } from './Pokemon';

export function PokemonList({ pokemons }) {
	if (pokemons) {
		return (
			<div>
				{pokemons?.map(p => {
					return <Pokemon pokemon={p} key={p.name} />
				})}
			</div>
		);
	}
}