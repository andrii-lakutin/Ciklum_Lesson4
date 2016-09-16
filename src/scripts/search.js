import {httpGet} from'./getData';
import {moviesFactory} from'./moviesFactory';

var DOM = {
	input: document.querySelector('.search input'),
	btn  : document.getElementById('search')
}

DOM.btn.addEventListener('click', () => {
	httpGet(`http://www.omdbapi.com/?t=${DOM.input.value}&y=&plot=full&r=json`)
		.then(
			response => {
				console.log(JSON.parse(response));
				moviesFactory(JSON.parse(response));
			},
			error => console.log(`Rejected: ${error}`)
			);
});