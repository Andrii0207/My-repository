import responce from './onSubmitSearch';

function updateResponce(responce) {
  console.log('updateResponce', responce);
  const { poster_path, title, genre_ids, release_date, vote_average } = responce;

  const date = parseInt('release_date');
  //   const date = console.log(date);
}

export default updateResponce;
