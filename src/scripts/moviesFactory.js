import {httpGet} from'./getData';

export function moviesFactory(json){

	const MOVIES_PLACE_IN_DOM = document.querySelector('.moviesSection .nonFavorites');

	var image = json.Poster;

	var movie = document.createElement('div');
		movie.className = "movie"; 
		movie.innerHTML = `<div class="poster" style="background: url(${image == "N/A" ? "../src/images/404.png" : json.Poster}) 50% 50% no-repeat; background-size: cover;">
						   		<div class= "shadow">${json.Title}</div>
						   </div>
						   <div class="description">${json.Plot}</div>
						   <div class="social">
						   		<p>${json.Year}</p>
						   		<p>${json.Runtime}</p>
						   		<p>IMDB: ${json.imdbRating}</p>
						   		<p class="star"><i class="fa fa-star" aria-hidden="true"></i></p>
						   </div>`;
	if (json.Response != 'False') {
		MOVIES_PLACE_IN_DOM.appendChild(movie);	
	} 
};