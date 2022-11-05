// import axios from 'axios';
// import Notiflix from 'notiflix';
// // import debounce from 'lodash.debounce';
// import galleryMarkup from '/src/templates/galleryMarkup.hbs';
// import oneMovieCard from '/src/templates/oneMovieCard.hbs';
// import refs from './js/refs';
// import fetchSearchFilm from './js/fetchAPI';

// const refs = {
//   form: document.querySelector('.search-form'),
//   input: document.querySelector('#search-form'),
//   list: document.querySelector('.movies-popular-list'),
// };

// async function fetchSearchFilm(data, page = 1) {
//   const API_KEY = '430ce39ddbb6d767664f5ab1d9d53645';
//   const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
//   const URL = `${BASE_URL}?api_key=${API_KEY}&query=${data}&page=${page}`;

//   try {
//     const responce = axios.get(URL);
//     return responce;
//   } catch (error) {
//     console.log('Something wrong! Can not search films' + error);
//   }
// }

// refs.form.addEventListener('submit', onClickSubmit);
// let value = null;
// let page = 1;

// function onClickSubmit(event) {
//   event.preventDefault();
//   page = 1;

//   value = refs.input.value.toLowerCase().trim();

//   fetchSearchFilm(value, page)
//     .then(createGallery)
//     // .then(resp => console.log('responce', resp))
//     .catch(error => console.log(error));
// }

// function createGallery(data) {
//   console.log('createGallery data', data);
//   const array = data.data.results;
//   console.log('createGallery array', array);

//   refs.list.innerHTML = oneMovieCard(array);
// }

// ================================================

// import axios from 'axios';

// async function fetchSearchFilm(data, page = 1) {
//   const API_KEY = '430ce39ddbb6d767664f5ab1d9d53645';
//   const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
//   const URL = `${BASE_URL}?api_key=${API_KEY}&query=${data}&page=${page}`;

//   try {
//     const responce = axios.get(URL);
//     return responce;
//   } catch (error) {
//     console.log('Something wrong! Can not search films' + error);
//   }
// }

// export default fetchSearchFilm;

// ================================================

// const refs = {
//   form: document.querySelector('.search-form'),
//   input: document.querySelector('#search-form'),
//   list: document.querySelector('.movies-popular-list'),
// };

// export default refs;

// ================================================

// {{#each this}}
//   <li class='gallery_item'>
//     <a class='gallery_link' href='/'>
//       <div class='wrapper_card'>
//         <div class='wrapper_img'>
//           <img
//             class='gallery_img'
//             src='https://image.tmdb.org/t/p/w500{{poster_path}}'
//             alt='{{title}}'
//             loading='lazy'
//           />
//         </div>
//         <div class='wrapper_data'>
//           <h2 class='gallery_name'>{{title}}</h2>
//           <p class='gallery_genre'>{{genre_ids}}</p>
//           <p class='gallery_year'>{{release_date}}</p>
//         </div>
//       </div>
//     </a>
//   </li>
// {{/each}}

// ================================================
