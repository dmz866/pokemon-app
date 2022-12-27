import { Link } from "react-router-dom";
import { getPokemonId } from '../../utils/utils';

export function Pokemon({ pokemon }) {
	if (pokemon) {
		const id = getPokemonId(pokemon.url);
		return (
			<div>
				<Link to={`pokemon/${id}`}>{pokemon.name}</Link>
			</div>
		);
	}
}