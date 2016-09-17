import {renderFavorite} from'../data/getFromStorage.js';
import {clearMovies} from'../data/clearMovies.js';

var DOM ={
	delAll        : document.querySelector('.delAll'),
	onlyFav       : document.querySelector('.onlyFav'),
	navSearch     : document.querySelector('.navSearch'),
	searchSection : document.querySelector('.searchSection'),
	movSection    : document.querySelector('.moviesSection'),
	filSection    : document.querySelector('.filtersSection')
}


DOM.delAll.addEventListener('click', () =>{
	localStorage.clear();
	clearMovies();
});

DOM.onlyFav.addEventListener('click', ()=>{
	clearMovies();
	renderFavorite();
});

DOM.navSearch.addEventListener('click', ()=>{
	DOM.searchSection.classList.toggle('hide-search-js');
	DOM.filSection.classList.toggle('hide-search-js');
	DOM.movSection.classList.toggle('padding-if-search-hidden-js');
});