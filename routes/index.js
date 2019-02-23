
var moviesJSON=require('../movies.json');


exports.home=
			function(req,res)
				{
					//res.send('This is a response on the home route'); This existed previously 14.02.2019
					var movies=moviesJSON.movies;
					res.render('home',
										{
											title:'The Good Stuff',
											movies:movies
										}
							   );//By default this looks in the home directory 14.02.2019
																//And this is how you pass args {key:val} which can be viewed
																// as <%= title %> at the target
				};
	   



//This is how we extract a passed param  14.02.2019
exports.movie_single=
			function(req,res)
				{   
					var movies=moviesJSON.movies;

					var episode_number=req.params.episode_number;
					if(episode_number>=1 && episode_number<=6)
					{
						var movie=movies[episode_number-1];
						var title=movie.title;
						var main_characters =movie.main_characters;
						res.render('movie_single',
							                      {
							                      	movies:movies,
							                      	title:title,
							                      	movie:movie,
							                      	main_characters:main_characters
							                      }
							  	  );
					}
					else
					{
						//res.send('Whoops that page does not exist');
						res.render('notFound',
												{
													movies : movies,
													title: "This is not the page you are looking for"
												}
								  );
					}

				};
	   

//Node is like a pipeline, if none of the above lines work it will reach and act down here  14.02.2019
exports.notFound=
			function(req,res)
				{		var movies=moviesJSON.movies;
						res.render('notFound',
												{
													movies : movies,
													title: "This is not the page you are looking for"
												}
								  );
				};
	      