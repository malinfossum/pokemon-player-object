function changePage(newPage) {
	model.currentPage = newPage;
	updateView();
}

function catchPokemon(pokemon) {
	model.data.player.pokemon = pokemon;
	model.data.player.caughtPokemons.push(pokemon);
	updateView();
}
