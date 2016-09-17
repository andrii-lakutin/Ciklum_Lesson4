export function clearMovies(){
	var MOVIES_PLACE_IN_DOM = document.querySelector('.moviesSection .nonFavorites');

	while (MOVIES_PLACE_IN_DOM.firstChild) {
	    MOVIES_PLACE_IN_DOM.removeChild(MOVIES_PLACE_IN_DOM.firstChild);
	}	
}