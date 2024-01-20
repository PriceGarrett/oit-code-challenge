const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

let corsOptions = {
    origin : ['http://localhost:43291']
}

app.use(cors(corsOptions));

class Movie {
    constructor(movie_id, title, poster_image_url, popularity_summary){
        this.movie_id = movie_id;
        this.title = title;
        this.poster_image_url = poster_image_url;
        this.popularity_summary = popularity_summary;
    }
}


app.get('/movies', (req, res) => {

console.log("Received Request");

    const key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGQxNzY2YzMzN2E5OGJlMWVlYjcwOTYxNzJjMzUxMCIsInN1YiI6IjY1YWMxNzNjMzk3NTYxMDBjYjIwZDQ3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k_z-iRyNyCxOMXOgV7RUnKKX6EvlSksIP2Jekd-qK7M"

    const title = req.query.search;
    if(title === undefined){
        return res.status(400).send({message: "Please search by a title"})
    }


    const imageUrl = "https://image.tmdb.org/t/p/";
    let imageSize = "original"


    const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${key}`
      }
    };

    fetch(url, options)
    .then(response => response.json())
    .then(json => {
        const results = json.results;
        var amountOfResults = results.length;
        var listOfMovies = [];

        if(amountOfResults === 0){
            return res.status(400).send({
                message: "No movies found with that title."
            })
        }

        if(amountOfResults > 10){
            amountOfResults = 10;
        }

        for (let i = 0; i < amountOfResults; i++) {
            const rawMovie = results[i];
            console.log(`${rawMovie.id} = ${rawMovie.title}`);
            var movie = new Movie(rawMovie.id, rawMovie.title, `${imageUrl}${imageSize}${rawMovie.poster_path}`, `${rawMovie.popularity} out of ${rawMovie.vote_count}`);

            listOfMovies.push(movie);
        }
        res.status(200).send(listOfMovies);
    })
    .catch(err => console.error('error:' + err));

})
app.get('/*', (req, res) => {
    res.status(404).send({message: "Not Found"});
})


app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
})
