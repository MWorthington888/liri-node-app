# liri-node-app
LIRI (Language Interpretation and Recognition Interface), is a command line node app that takes in 
parameters and gives you back data. LIRI will search Spotify for songs, Bands in Town for concerts, 
and OMDB for movies via an Axios package.


There are 3 different types of Command Lines available to the user:

node liri.js concert-this '<artist/band name here>'
---------------------------------------------------
This will search the 'Bands in Town' Artist Events API for the artist/band entered and return the following 
information about each event to the terminal:

* Name of the venue
* Venue location
* Date of the Event 


node liri.js spotify-this-song '<song name here>'
-------------------------------------------------
This will search the Spotify API for a song entered and return the following information about that
song to the terminal:

* Artist
* The song's name
* A preview link of the song from Spotify
* The album that the song is from


node liri.js movie-this '<movie name here>'
-------------------------------------------
This will search the OMDB API for a movie entered and return the following 
information about that movie to the terminal:

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
