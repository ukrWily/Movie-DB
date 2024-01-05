
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
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
    document.querySelector('.adding__input').value = '';

    const checkbox = document.querySelector('input[type="checkbox"]');
    if (checkbox.checked){
        console.log('Добавляем любимый фильм');
        checkbox.checked = false;
    }

    addMoviesToPage();
}
document.querySelector('.add button').onclick = (event) => {
    event.preventDefault();
    if (document.querySelector('.adding__input').value){
        addingMovie();
    }
};

// Deleting movie from the list
function deleteMovie(e){
    const currentMovie = this.previousSibling.textContent.toLowerCase().slice(3).trim();
    let newDB = [];

    movieDB.movies.forEach(el => newDB.push(el.toLowerCase()));
    movieDB.movies = [];

    movieDB.movies = newDB.filter(el => el.toLowerCase() != currentMovie);
    addMoviesToPage();
    // console.log(movieDB.movies);
    
}
/** */
function addDelButton(){
    document.querySelectorAll('.delete').forEach(el => {
        el.addEventListener('click', deleteMovie);
    })
}
addDelButton();

})