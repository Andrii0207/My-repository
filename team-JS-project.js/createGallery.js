import oneMovieCard from '/src/templates/oneMovieCard.hbs';
import Notiflix from 'notiflix';
import refs from './refs';
import updateResponce from './updateResponce';
import page from './onSubmitSearch';

function createGallery(data, page) {
  console.log('createGallery data:', data);
  console.log('createGallery page:', page);

  if (page === 1) {
    refs.list.innerHTML = oneMovieCard(data);
    // refs.list.insertAdjacentHTML('beforeend', oneMovieCard(data));
  }
  refs.list.insertAdjacentHTML('beforeend', oneMovieCard(data));
  // refs.list.innerHTML = oneMovieCard(data);
}

export default createGallery;
