function changePage(newPage) {
	model.currentPage = newPage;
	updateView();
}

function catchPokemon(pokemonName) {
	model.data.player.pokemon = pokemonName;
	model.data.player.caughtPokemons.push(pokemonName);
	updateView();
}
