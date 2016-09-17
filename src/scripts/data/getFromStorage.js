
document.addEventListener("DOMContentLoaded", function(event) {
	renderFavorite();
});

export function renderFavorite (){
	const MOVIES_PLACE_IN_DOM = document.querySelector('.moviesSection .nonFavorites');
	
	for (let key in localStorage){
		let movie = document.createElement('div');
		movie.className = "movie";
		movie.innerHTML = localStorage[key];
		MOVIES_PLACE_IN_DOM.appendChild(movie);	
	}
}