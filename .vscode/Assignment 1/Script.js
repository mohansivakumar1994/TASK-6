//1.Class - Movie

class Movie{
constructor(title,studio,rating="PG"){
this.title=title
this.studio=studio
this.rating=rating
}
static getPG(array){
return array.filter(Movie => Movie.rating==="PG")
}
}
var array = [
new Movie("Casino Royale", "Eon production", "PG13"),
new Movie("Jurassic park", "Universal Pictures", "PG"),
new Movie("Harry potter","Warner Bros","PG")
];
var pgMovies = Movie.getPG(array);
console.log(pgMovies);
