
'use strict';


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// Removing advertisements
const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(el => el.remove());

// Change genre
document.querySelector('.promo__genre').textContent = 'драма';

// Change image
let bg = document.querySelector('.promo__bg');
bg.style.cssText = 'background-image: url("img/bg.jpg")';

// Adding list of movies on the page
function addMoviesToPage(){
    let moviesList = document.querySelector('.promo__interactive-list');
    moviesList.innerHTML = '';
    movieDB.movies.sort();
    movieDB.movies.forEach((movie, i) => {
        moviesList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${movie}
            <div class="delete"></div>
        </li> `;
    });
    addDelButton();
}
addMoviesToPage();

// Added movie into the list
function addingMovie(){
    let newMovie = document.querySelector('.adding__input').value;
    newMovie = newMovie.length <= 21 ? newMovie : newMovie.substring(0, 21) + '...';
    movieDB.movies.push(newMovie);
    addMoviesToPage();
}
document.querySelector('.add button').onclick = (event) => {
    event.preventDefault();
    addingMovie();
};

// Deleting movie from the list
function deleteMovie(e){
    console.log(e.target.parentElement.textContent.slice(3));
    const currentMovie = e.target.parentElement.textContent.toLowerCase().trim();
    let movies = [];
    movieDB.movies.forEach(el => movies.push(el.slice(3)));
    movieDB.movies = [];
    movieDB.movies = movies.filter(el => el.toLowerCase() != currentMovie);
    addMoviesToPage();
    addDelButton();
}

function addDelButton(){
    document.querySelectorAll('.delete').forEach(el => {
        el.addEventListener('click', deleteMovie);
    })
}
addDelButton();