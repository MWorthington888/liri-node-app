require("dotenv").config();

const fs = require("fs");
const axios = require("axios");
const moment = require('moment');



var Spotify = require("node-spotify-api");
//Code required to import the key.js
var keys = require("./keys.js");

//Access the keys information
var spotify = new Spotify(keys.spotify);


const action = process.argv[2];
let value = process.argv.slice(3).join(" ");



//Switch Case for user input of 'Action' ----------------------------------------------------------
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


  // Bands-in-town function ---------------------------------------------------------------------------------
function concert() {
       
    let bandName = value

       let queryUrl = `https://rest.bandsintown.com/artists/${bandName}/events?app_id=codingbootcamp`
      
    axios.get(queryUrl).then(
    function(response) {
      
    console.log("Venue: " + response.data[0].venue.name);
    console.log("Location: " + response.data[0].venue.city +", " + response.data[0].venue.country);
    console.log("Time: " + response.data[0].venue.country);
    console.log(moment(response.data[0].datetime, "YYYY-MM-DDTHH:mm:ss").utc().format("MM/DD/YYYY"));  
          });
  };


// Movie function ------------------------------------------------------------------------------------------
   function movie() {
      
    let movieName = value



    let queryUrl = `http://www.omdbapi.com/?t=${movieName}&y=&plot=short&apikey=trilogy`;

    if (!movieName) {//If the user did not type a movie, we display the informations for Mr Nobody
      let queryUrl = `http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy`;
      console.log(queryUrl);
    };
    
    
    axios.get(queryUrl).then(
    function(response) {
    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("IMDB rating: " + response.data.imdbRating);
    console.log("Rotten Tomato rating: " + response.data.Ratings[1].Value);
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
      });
    };
   
    
  //Spotify function ----------------------------------------------------------------------------------------------

  //DVELOPER'S NOTE ========================================
  // Issues with Spotify-this-song. Continued debugging needed.
   //=========================================================

    // function spotify() {
 
    //   let song = value

    //   spotify.search({ type: 'track', query: song}, function(err, data) {
    //       if ( err ) {
    //           console.log('Error occurred: ' + err);
    //           return;
    //       }
      
        // response.tracks.items.forEach(song=>{

            // console.log("Artist: "+song.artists[0].name);
            // console.log("Song Name: "+song.name);
            // console.log("Preview Link: "+song.preview_url);
             // console.log("The Song Album: "+song.album.name);
           
    //     });
    //   });
    // }

    //DEVELOPER'S NOTE ==========================================================
    //Do-What-It-Says function still needs debugging. Issues with data within random.txt file across
    // all three functions (Concert-this, Spotify-this and Movie-this).
    //==============================================================================

    // function dowhatitsays(){
    //   fs.readFile('random.txt', "utf8", function(error, data){
    //     var randomText = data.split(',');
    
    //     concert(randomText[1]);
    //   });
    // }
    