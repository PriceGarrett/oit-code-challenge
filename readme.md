# Movie Search App

## Instructions
To start the server, run:
```
cd webservice
npm install
node app.js
```

To start the web app, run:
```
cd webapp
npm install
npm run dev
```
(On the final commit .env was ignored, so I added that back so you shouldn't need to change any ports to run the app.)
## Future Improvements
1. Testing
    - I've never used a testing framework for js, so this was new to me.  I spent about 45 minutes to an hour trying to get Mocha with Chai working so I could write tests for the web server, but I could not get it.  It was probably just due to the time pressure and something simple I'm missing in the config.  I did learn how to write the tests and thanks to previous testing experience I believe I could write effective tests once the tooling is set up.  

2. Security
    - The API key I used is simply hardcoded into the app.js file, which isn't good. I did send it as a header following the pattern TMDB recommends, but there are still improvements to be made.   

3. Style
    - The app is currently very boring to look at.  I was hoping to have more time to make it look better by adding a colorscheme and making the cards more interactive so it is clear which one is being hovered over along with a few other changes. It is also the first time I have worked with Vue for several years, so it took me some time to remember how it worked.  I spent more time than I would have liked on just making it functional. 