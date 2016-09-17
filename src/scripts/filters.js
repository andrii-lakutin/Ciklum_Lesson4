import {renderFavorite} from'./data/getFromStorage.js';
import {clearMovies} from'./data/clearMovies.js';
import {moviesFactory} from'./moviesFactory';
import {httpGet} from'./data/getData';

var DOM = {
	ser 	    : document.querySelector('ser'),
	mov 	    : document.querySelector('mov'),
	serCheckbox : document.getElementById('ser'),
	movCheckbox : document.getElementById('mov'),
	year        : document.getElementById('year'),
	pages       : document.querySelector('.pages')
}

