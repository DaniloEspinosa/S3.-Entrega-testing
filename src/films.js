const movies = require('./data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((item) => item.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((item) => item.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let list = array.filter((item) => item.director === director);

  let result =
    list.reduce((acc, item) => {
      return acc + item.score;
    }, 0) / list.length;
  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const result = array
    .map((item) => item.title) // nuevo array solo con los titulos
    .sort((a, b) => (a > b ? 1 : -1)) // ordenando alfabeticamente el array
    .splice(0, 20); // limitando solo los primeros 20 resultados
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const result = array
    .sort((a, b) => {
      if (a.year > b.year) return 1;
      if (a.year < b.year) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    })
    .map((item) => item);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  if (typeof category == 'number') return 0;
  if (category == '') return 0;
  const genre = category[0].toUpperCase() + category.slice(1).toLowerCase();
  const arrayCategory = array.filter((item) => item.genre.includes(`${genre}`));
  const result =
    arrayCategory.reduce((acc, item) => acc + item.score, 0) /
    arrayCategory.length;
  return parseFloat(result.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const newArray = array.map((item) => {
    let separar = item.duration.split('h'); // Dividir la duración por 'h'
    let hours = Number(separar[0].trim()); // Obtener las horas
    let minutes = separar[1] ? Number(separar[1].replace('min', '').trim()) : 0; // Obtener los minutos o 0 si no hay

    return { ...item, duration: hours * 60 + minutes };
  });
  return newArray;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
