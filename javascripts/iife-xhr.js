function showCarnivores (carnivores) {
	var carnies = document.getElementById("carnies");
	carnivores.forEach( function(el) {
		carnies.innerHTML += `<li>${el}</li>`;
	});
}

function showHerbivores (herbivores) {
	var herbies = document.getElementById("herbies");
	herbivores.forEach( function(el) {
		herbies.innerHTML += `<li>${el}</li>`;
	});
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);
