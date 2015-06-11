//var array = ["http://www.omdbapi.com/?t=titanic","http://www.omdbapi.com/?t=dhoom","http://www.omdbapi.com/?t=kick","http://www.omdbapi.com/?t=doom2","http://www.omdbapi.com/?t=dhoom3","http://www.omdbapi.com/?t=awarapan","http://www.omdbapi.com/?t=diehard4"];
//for(i in array){
	//xmlhttp.open("GET",array[i],true);
	//var myArr = JSON.parse(xmlhttp.responseText)

function loadXMLDoc()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {
  xmlhttp=new XMLHttpRequest();
  }
else
  {
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  }
  for(i in array){
xmlhttp.open("GET","http://www.omdbapi.com/?t=titanic",true);
xmlhttp.send();
}