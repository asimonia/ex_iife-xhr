"use strict";
var Predator = (function () {
	var _carnivores = [];
	var _herbivores = [];

	return {
		loadCarnivores: function (callbackToInvoke) {
			var loader = new XMLHttpRequest();
			loader.open("GET", "data/carnivores.json");
			loader.send();

			loader.addEventListener("load", function () {
				_carnivores = JSON.parse(this.responseText).carnivores;
				callbackToInvoke(_carnivores);
			});
		},
		loadHerbivores: function (callbackToInvoke) {
			var loader = new XMLHttpRequest();
			loader.open("GET", "data/herbivores.json");
			loader.send();

			loader.addEventListener("load", function () {
				_herbivores = JSON.parse(this.responseText).herbivores;
				callbackToInvoke(_herbivores);
			});
		}
	};
})();