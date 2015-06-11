var moviesName = [
{

	"movie": "Fastandfurious7",
	"date": "21-1-2015",
	"time":"11.00p.m",
	"tickets":"1",
	"theatre": ["prasad"]       
	
	},
	{
		"movie":"tannuwedsmannu",
		"date":"25-2-2015",
		"time":"12.00p.m",
		"tickets":"2",
		"theatre": ["inox"]
		
		},
		{
			"movie":"avengers",
			"date":"28-1-2015",
			"time":"7.00p.m",
			"tickets":"3",
			"theatre": ["imax"]
	},
	]
	function openFunction(){
	for(var i=0;i<moviesName.length;i++){
document.getElementById("mt").innerHTML += '<option>' +moviesName[i].movie+'</option>';
document.getElementById("dt").innerHTML += '<option>' +moviesName[i].date+'</option>';
document.getElementById("tt").innerHTML += '<option>' +moviesName[i].theatre+'</option>';	
document.getElementById("st").innerHTML += '<option>' +moviesName[i].time+'</option>';
document.getElementById("tk").innerHTML += '<option>' +moviesName[i].tickets+'</option>';
	}


}
var movtitle,dateset,theatresel,showtime,ticketsh;
function addmovie(){
	var url=window.location.search.substring(1).split("&");
	var decurl = decodeURIComponent(url);
	var data= decurl.split(",");
	var arr = new Array();
	for(var i=0;i<data.length;i++){
		var val = data[i].indexOf("=");
		arr[i] = data[i].slice(val+1);

	}
	movtitle = arr[0];
	dateset = arr[1];
	theatresel = arr[2];
	showtime = arr[3];
	ticketsh= arr[4];
	document.getElementById("times").innerHTML= '<td>'+movtitle+'</td>'+'<td>'+dateset+'</td>'+'<td>'+theatresel+'</td>'+'<td>'+showtime+'</td>'+'<td>'+ticketsh+'</td>';
//movtitle = document.getElementById("mt").value;
//dateset = document.getElementById("dt").value;
//theatresel = document.getElementById("tt").value;
//showtime = document.getElementById("st").value;
//ticketsh= document.getElementById("tk").value;
//alert("film Name="+movtitle+" "+"date="+dateset+" "+"theatre="+theatresel+" "+"time="+showtime+" "+"tickets="+ticketsh);
}
for(var i=0; i<5;i++){
	var string = 'abcde';
	var d= string.charAt(i);

	for(var j=0;j<10;j++){
		document.getElementById('t'+ i).innerHTML += "<td><a onclick='seatselect(id)' id='"+d+""+j+"'><img src='available1.png' alt='available'></img></a></td>";
	}
}
var selectseats =new Array();
function seatselect(id){
	if(selectseats.length< ticketsh){
		document.getElementById(id).outerHTML = '<a onclick="unselect(id) id="'+id+'"><img src="available.png" alt="available not"></img></a></td>';
		selectseats.push(id);
		document.getElementById("selected").innerHTML = selectseats;
	}
	else{
		alert("You can choose to select"+ ticketsh +"seats")
	}
	}
	function unselect(id){
		document.getElementById(id).outerHTML='<a onclick="seatselect(id)" id="'+id+'"><img src="available1.png" alt"available"/></a>';
		for(var k in selectseats){
			if(selectseats[k]== id){
				selectseats.splice(k,1);
				document.getElementById("selected").innerHTML = selectseats;
			}
		}
	}
function selectConfirm(){
	document.getElementById("mn").innerHTML= '<table class="pad"><th>Movie Name: </th><th>'+movtitle+'</th><th>show date: </th><th>'+dateset+'</th><th>Theater: </th><th>'+theatresel+'</th><th>time: </th><th>'+showtime+'</th><th>Tickets: </th><th>'+ticketsh+'</th><th>Selected Seats: </th><th>'+selectseats+'</th></table>';
}