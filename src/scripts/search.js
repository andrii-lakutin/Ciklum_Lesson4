import {renderFavorite} from'./data/getFromStorage.js';
import {clearMovies} from'./data/clearMovies.js';
import {moviesFactory} from'./moviesFactory';
import {httpGet} from'./data/getData';

var DOM = {
	input       : document.querySelector('.search input'),
	btn         : document.getElementById('search'),
	type        : document.querySelector('.type'),
	year        : document.getElementById('year'),
	pages       : document.querySelector('.pages')
};  


function refreshData(page = ""){
	clearMovies();
	renderFavorite();
	search(`http://www.omdbapi.com/?s=${DOM.input.value}&y=${DOM.year.value}&type=${DOM.type.value}&plot=full&r=json&page=${page}`);
};

//Search button
DOM.btn.addEventListener('click', () => {
	refreshData();
});

//Enter button
DOM.input.addEventListener('keydown', (e)=>{
	if (e.keyCode == 13) {
		refreshData();
	}
});

//Select on change
DOM.type.addEventListener('change', ()=>{
	refreshData();
});

// DELEGATION
DOM.pages.addEventListener('click',(e)=>{
	var target = e.target;
	if (target.classList.value != 'page') return;
	switch (target.innerHTML) {
    case '1':
        refreshData(target.innerHTML)
        break;
    case '2':
        refreshData(target.innerHTML)
        break;
    case '3':
        refreshData(target.innerHTML)
        break;
    case '4':
        refreshData(target.innerHTML)
        break;
    case '5':
        refreshData(target.innerHTML)
        break;
    case '6':
        refreshData(target.innerHTML)
        break;
    case '7':
        refreshData(target.innerHTML)
        break;
    case '8':
        refreshData(target.innerHTML)
        break;
    case '9':
        refreshData(target.innerHTML)
        break;
    default:
    	break;
	}
})


function search(url){
	httpGet(url)
	.then(
		response => {
			console.log(JSON.parse(response));
			moviesFactory(JSON.parse(response));
		},
		error => console.log(`Rejected: ${error}`)
		);
};
