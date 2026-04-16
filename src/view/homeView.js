function homeView() {
	const player = model.data.player;

	return /*HTML*/ `
        <div class="page">
            <div class="card">
                <h2>${player.name}</h2>
                <img class="player-image" src="${player.image}" alt="${player.name}">
                <p>Pokémon: ${player.pokemon.name} (lvl ${player.pokemon.level})</p>

                <h3>Caught Pokémon</h3>
                <ul class="pokemon-list">
                    ${createCaughtPokemonsHtml(player.caughtPokemons)}
                </ul>
            </div>
        </div>
    `;
}

function createCaughtPokemonsHtml(pokemons) {
	if (pokemons.length === 0) {
		return `<li>No Pokémon caught yet.</li>`;
	}

	let html = "";

	for (let i = 0; i < pokemons.length; i++) {
		html += `<li>${pokemons[i].name} – lvl ${pokemons[i].level}</li>`;
	}

	return html;
}
