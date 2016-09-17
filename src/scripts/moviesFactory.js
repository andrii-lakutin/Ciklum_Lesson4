import {httpGet} from'./data/getData';

export function moviesFactory(json){

	const MOVIES_PLACE_IN_DOM = document.querySelector('.moviesSection .nonFavorites');

	json.Search.forEach((item,i,arr)=>{
		var image = item.Poster;

		var movie = document.createElement('div');
			movie.className = "movie"; 
			movie.innerHTML = `<div class="poster" style="background: url(${image == "N/A" ? "../src/images/404.png" : image }) 50% 50% no-repeat; background-size: cover;">
							   		<div class= "shadow">${item.Title}</div>
							   </div>
							   <div class="social">
							   		<p>${item.Year}</p>
							   		<p>${item.Type}</p>
							   		<p class="star"><i class="fa fa-star js-star" aria-hidden="true"></i></p>
							   </div>`;
		//убираем повторения избранных
		if (localStorage.getItem(`${item.Title}`) === null) {
			MOVIES_PLACE_IN_DOM.appendChild(movie);
		} 	

	});
};