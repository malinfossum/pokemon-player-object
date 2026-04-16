const model = {
	app: document.getElementById("app"),
	currentPage: "home",

	data: {
		player: {
			name: "Ash",
			image: "./src/img/player.png",
			pokemon: { name: "Pikachu", level: 8 },
			caughtPokemons: [
				{ name: "Pikachu", level: 8 },
				{ name: "Bulbasaur", level: 12 },
				{ name: "Charmander", level: 10 },
			],
		},
	},
};
