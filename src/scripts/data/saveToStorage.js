
var allMoviesOnPage = document.querySelector('.moviesSection');
// DELEGATION
allMoviesOnPage.addEventListener('click', (e) =>{

	var target = e.target;

	if (target.classList.value.indexOf('js-star') === -1 ) return;
	target.classList.toggle('star-shine-js');

	var movie = target.parentNode.parentNode.parentNode;
	var title = movie.children[0].children[0].innerHTML;

	if (localStorage.getItem(`${title}`) != null) {
		localStorage.removeItem(`${title}`);
	} else{
		localStorage.setItem(`${title}`, movie.innerHTML);
	}
});