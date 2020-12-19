var numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?", "");

//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;

//       console.log(personalMovieDB);



for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");

          if (a != null && b != null && a!= '' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
          } else {
              i--;
              console.log('Error');
          }

}

if (numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert('Вы классический зритель');
} else if (numberOfFilms > 30){
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);

// Ну тут типо нужно переписать цикл ещё двумя способами, но этот тоже не плохо работает)