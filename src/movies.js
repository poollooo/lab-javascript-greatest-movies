// const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(allMovies) {
    const directors = allMovies.map(element => element.director);
    return directors;
}

// console.log('directors are :', getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteredMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes(`Drama`));
    return filteredMovies.length;
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const scores = moviesArray.map((movie) => movie.score);
    const sum = scores.reduce((acc, curr) => acc + curr);
    const avg = sum / scores.length;
    return Math.round(avg * 100) / 100;
}

// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes(`Drama`));
    if (dramaMovies.length === 0) {
        return 0;
    }
    // console.log('Drama movies: ', dramaMovies);
    const scores = dramaMovies.map(movie => movie.score);
    // console.log('Drama movies scores: ', scores);
    const sum = scores.reduce((acc, curr) => acc + curr);
    // console.log('Drama movies scores sum: ', sum);
    const avg = sum / scores.length;
    return Math.round(avg * 100) / 100;
}

// console.log('drama movie scores', dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order) should order movies with the same year by their title, alphabetically
function orderByYear(moviesArray) {
    const orderedMovies = moviesArray.slice().sort((a, b) => a.year - b.year);
    orderedMovies.forEach(year => orderAlphabetically)
    if (orderedMovies.length === 0) {
        return 0;
    }
    return orderedMovies;
}

// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderedMovies = moviesArray.slice().sort((a, b) => a.title.localeCompare(b.title));
    const orderedTitles = orderedMovies.map(movie => movie.title).slice(0, 20);
    return orderedTitles;
}

orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
