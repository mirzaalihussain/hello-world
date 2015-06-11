var moviesList = ["http://www.omdbapi.com/?t=athadu", "http://www.omdbapi.com/?t=transformer","http://www.omdbapi.com/?t=kick","http://www.omdbapi.com/?t=avengers","http://www.omdbapi.com/?t=legend","http://www.omdbapi.com/?t=ironman"];
function loadData() {
var numOfMovies = moviesList.length;

for(var i = 0; i < moviesList.length; i++){
	
	var movie = moviesList[i];
	alert("hi");

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = (function(_xhr, tmp){
		//console.log("Tmp - "  + tmp);
		return function(){
			if(_xhr.readyState == 4){
				var r = JSON.parse(_xhr.responseText);

				
				// Ready
				// Call Render
				var out = '<tr><td>' + r.Title + '</td>'+ '<td>' + r.Released + '</td>'+ '<td>' + r.Director + '</td></tr>';
				document.getElementById("div").innerHTML += out;
			}
		};
	})(xhr, i);
	xhr.open("GET",moviesList[i], true);
	xhr.send(null);
}
};
document.addEventListener("DOMContentLoaded",loadData);