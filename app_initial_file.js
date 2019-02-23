var express=require('express');

var app= express();

app.set('view engine','ejs');// This is where you set the rendering engine

//Very first thing that we did on  14.02.2019
app.get('/',
			function(req,res)
				{
					//res.send('This is a response on the home route'); This existed previously 14.02.2019
					res.render('home',{
										title:'The Good Stuff',
										movies:['The First Movie','The Second Movie','The Third Movie']
									   }
							   );//By default this looks in the home directory 14.02.2019
																//And this is how you pass args {key:val} which can be viewed
																// as <%= title %> at the target
				}
	   );



//This is how we extract a passed param  14.02.2019
app.get('/star_wars_movie/:episode_number?',
			function(req,res)
				{
					var e_number=req.params.episode_number;
					res.send('This is the page for  episode:'+e_number);
				}
	   );

//Node is like a pipeline, if none of the above lines work it will reach and act down here  14.02.2019
app.get('*',
			function(req,res)
				{
					console.log('This is not the page you are looking for');
				}
	   );


//This is how we decide which port to listen to
app.listen(3000,
				function()
					{
						console.log('listening on port number');
					}
		  );