import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { POKEMON_API_URL } from '../../constants/constants';

export function PokemonInformation() {
	const { id } = useParams();
	const [pokemon, setPokemon] = useState(undefined);
	const [loading, setLoading] = useState(true);
	const getPokemon = async () => {
		const result = await fetch(`${POKEMON_API_URL}/${id}`);
		const data = await result.json();
		setPokemon(data);
		setLoading(false);
	};
	const navigate = useNavigate();
	const navHome = () => {
		navigate('/');
	};

	useEffect(() => {
		getPokemon();
	});

	if (loading) {
		return (
			<div>Loading...</div>
		);
	}
	return (
		<div>
			<h2>{pokemon.name}</h2>
			<img alt={pokemon.name} src={pokemon.sprites.front_shiny}></img>
			<h3>Abilities</h3>
			{pokemon.abilities.map(ab => {
				return <li key={ab.ability.name}>{ab.ability.name}</li>;
			})}
			<button onClick={navHome}>Home</button>
		</div>
	);
}