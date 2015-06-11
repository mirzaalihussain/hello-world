var moviesList = ["http://www.omdbapi.com/?t=athadu", "http://www.omdbapi.com/?t=transformer","http://www.omdbapi.com/?t=kick","http://www.omdbapi.com/?t=avengers","http://www.omdbapi.com/?t=legend","http://www.omdbapi.com/?t=ironman"];
//var numOfMovies = moviesList.length;
//for(var i = 0;i < moviesList.length; i++)
 //function getMovie(i){
 	//this.i = i;
 //}
 //Get data from web
 function getMovie(i){


 this.i = i;
}
 getMovie.prototype.getData = function(){
 	this.xhr = new XMLHttpRequest();
 	var that = this;
 	this.xhr.onreadystatechange = function(){
 		that.onReadyStateChangeHandler();
 	};
 	this.xhr.open("GET",moviesList[i],true);
 	this.xhr.send(null);
 };
 getMovie.prototype.onReadyStateChangeHandler = function(xhr){
 	if(this.xhr.readyState == 4){
 		var r = JSON.parse(this.xhr.responseText);
 	
 	this.render(r);
 	console.log(r);
 	}
 };
 getMovie.prototype.render = function(r){
 	var out = '<tr><td>' + r.Title + '</td>'+ '<td><button type ="submit" id="'+r.imdbID + '" onclick="callsite(id)">'+r.Title+'</button></td>' + '<td>' + r.Released + '</td>'+ '<td>' + r.Director + '</td></tr>';
 	document.getElementById("div").innerHTML += out;
 	console.log(out);
 }
for(var i = 0;i < moviesList.length; i++){
	var movie = moviesList[i];
	var getMov = new getMovie(movie, i);
	getMov.getData();
}
function callsite(data){
	console.log(data);
	//var movid = document.getElementById(data).id;
	window.location.href= 'http://www.imdb.com/title/' + data;

}
