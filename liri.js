require("dotenv").config();

var spotify = new Spotify(keys.spotify);



// Load the fs package to read and write
const fs = require("fs");
const axios = require("axios");
const spotify = require('spotify');


const action = process.argv[2];
const value = process.argv[3];


switch (action) {
  case "concert-this":
    concert();
    break;
  
  case "spotify-this-song":
    spotify();
    break;
  
  case "movie-this":
    movie();
    break;
  
  case "do-what-it-says":
    dowhatitsays();
    break;
  }
  
   function concert() {

    
    // let queryUrl = `http://www.omdbapi.com/?t=${movieName}&y=&plot=short&apikey=trilogy`;
    let queryUrl = "https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp";
    console.log(queryUrl);

    console.log(process.argv[2]);
    console.log(process.argv[3]);

    axios.get(queryUrl).then(
      function(response) {
        console.log("Release Year: " + response.data.Year);
        console.log(value);
      }
    );
  // axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
  // function(response) {
    
//     console.log("Artist: " + response.data.imdbRating);
//     console.log("Song Name: " + response.data.imdbRating);
//     console.log("Album: " + response.data.imdbRating);
//     console.log("Preview Link: " + response.data.imdbRating);

//   }
// );

  
  function spotify() {

  
 
  spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
   
      // Do something with 'data'
  });
  

 function movie() {

  const movieName = "";

  if (value = "") {
    movieName = "Mr. Nobody";

  } else {
    movieName = value;
  }
// Grab the movieName which will always be the third node argument.
// const movieName = process.argv[2];

// Then run a request with axios to the OMDB API with the movie specified
const queryUrl = `http://www.omdbapi.com/?t=${movieName}&y=&plot=short&apikey=trilogy`;

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Title: " + response.data.Year);
    console.log("Release Year: " + response.data.Year);
    console.log("IMDB rating: " + response.data.Year);
    console.log("Rottten Tomato rating: " + response.data.Year);
    console.log("Country: " + response.data.Year);
    console.log("Language: " + response.data.Year);
    console.log("Plot: " + response.data.Year);
    console.log("Actors: " + response.data.Year);
   
  }
);

  

 
//  function dowhatitsays() {
  

