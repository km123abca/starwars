var express=require('express');

var app= express();

app.set('view engine','ejs');// This is where you set the rendering engine

var routes= require('./routes');

var path=require('path');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',routes.home);



app.get('/star_wars_movie/:episode_number?',routes.movie_single);

app.get('/star_wars_episode/:episode_number?',routes.movie_single);
			
app.get('*',routes.notFound);
			


//This is how we decide which port to listen to

/*
app.listen(3000,
				function()
					{
						console.log('listening on port number');
					}
		  );
*/

app.listen(process.env.PORT || 3000);