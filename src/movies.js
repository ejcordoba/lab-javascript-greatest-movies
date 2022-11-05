// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return allDirectors = moviesArray.map(movie => movie.director);    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramaMovies = moviesArray.filter(function (movie) {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');        
    });
    return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let averageScore = 0;
    
    if (moviesArray.length > 0) {
        const noScoreArray = moviesArray.map(function (movie) {
            if (movie.score === '' || !movie.score) {
                return movie.score = 0;

            } else {
                return movie.score;
            }
        });
        const totalScores = moviesArray.reduce(function (acc, movie) {
            return acc + movie.score;
        }, 0);
        averageScore = totalScores / moviesArray.length;
        return parseFloat(averageScore.toFixed(2));        
    } else {
        return 0;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {    
    if (moviesArray.length === 1) {
        return moviesArray[0].score;
    }
    const dramaRateAvg = moviesArray.filter(movie => movie.genre.includes('Drama'));
    return scoresAverage(dramaRateAvg);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderByYearMovies = [];
    if (moviesArray.length === 1) {
        return moviesArray;
    }
    orderByYearMovies = [...moviesArray].sort((a,b) => a.year - b.year); 
    function compare( a, b ) {
        if ( a.title < b.title && a.year === b.year){
            return -1;
        }
        if ( a.title > b.title && a.year === b.year){
            return 1;
        }
        return 0;
    }
    orderByYearMovies = orderByYearMovies.sort(compare);
    return orderByYearMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movies = moviesArray.sort((x, y) => {
        if (x.title < y.title) {
            return -1
        } else {
            return 0;
        }
    });
    return movies.map((el) => el.title).slice(0, 20);
    /*
    return moviesArray.sort((x,y)=> x.title.localeCompare(y.title)).map(el=> el.title).slice(0,20)
     */
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let turnHoursToMinutes = [...moviesArray];
    const result =  turnHoursToMinutes.map(movie => {
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: calc(movie.duration),
            genre: movie.genre,
            score: movie.score
        }            
    });
    return result;
}
function calc(element) {
  const hourInString = element;
  const splitHour = hourInString.split(' ');
  let hours = 0;
  let minutes = 0;
  if (splitHour[0]) {
    hours = parseFloat(splitHour[0].match(/\d+/)[0]);
  }
  if (splitHour[1]) {
    minutes = parseFloat(splitHour[1].match(/\d+/)[0]);
  }
  const sum = hours * 60 + minutes;
  return sum;
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    let tempMoviesArray = [...moviesArray];
    if (tempMoviesArray.length === 0) {
        return null;
    } else if (tempMoviesArray.length === 1) {
        return `The best year was ${tempMoviesArray[0].year} with an average score of ${tempMoviesArray[0].score}`
    } else {
        
        
        //return `The best year was ${tempMoviesArray.year} with an average score of 9.2`;
    }
    return tempMoviesArray;
}
