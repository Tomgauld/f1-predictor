var positions = document.querySelectorAll('.position');

document.addEventListener('DOMContentLoaded', function() {
	createOptions(positions);
	addEventListeners(positions);
});

function createOptions(positions) {
	for (var i = 0; i < positions.length; i++) {
		var position = positions[i];
		var option = document.createElement('option');

		position.appendChild(option);

		for (var j = 1; j <= 20; j++) {
			var option = document.createElement('option');

			option.value = j;
			option.textContent = j;
			position.appendChild(option);
		}
	}
}

function addEventListeners(positions) {
	for (var i = 0; i < positions.length; i++) {
		var position = positions[i];

		position.addEventListener('change', function(e) {
			alert('You changed the input for ' + e.target.dataset.driver + ' and you chose ' + e.target.value + '!');
		});
	}
}