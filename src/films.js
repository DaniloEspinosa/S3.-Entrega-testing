const movies = require('./data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((item) => item.director); // Nuevo array con solo los directores utilizando map
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((item) => item.director === director); //Metodo filter para filtrar por director
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let list = array.filter((item) => item.director === director); // Obtener las peliculas segun el director

  let result =
    list.reduce((acc, item) => {                   //Utilizar el reduce para sumar los score
      return acc + item.score;
    }, 0) / list.length;                           //Dividir por la cantidad de items y obener el promedio
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
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;  // En caso que el año sea el mismo ordenar por titulo
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    })
    .map((item) => item);  // Hacer un map para devolver un nuevo array 
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  if (typeof category == 'number') return 0;                // Si se escribe un numero en la categoria retornar 0
  if (category == '') return 0;                             // Si se escribe un string vacio en la categoria retornar 0
  const genre = category[0].toUpperCase() + category.slice(1).toLowerCase();   //Dar el formato correcto a la categoria
  const arrayCategory = array.filter((item) => item.genre.includes(`${genre}`));  //filtrar las peliculas por la categoria indicada
  const result =
    arrayCategory.reduce((acc, item) => acc + item.score, 0) /        //Utilizar el reduce para sumar los score
    arrayCategory.length;                                             //Dividir por la cantidad de items y obener el promedio
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
function bestFilmOfYear(array, year) {
  let result = array.sort((a, b) => b.score - a.score);              // Ordenar todas las peliculas por el score
  return [result.find((movie) => movie.year === year)];              // Una vez ordenadas obtener el valor mas alto por el año y devolver un array
}

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
