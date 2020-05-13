var origQtext="";
var rezerve="";
var sureQenough=0;

function correction1p2d()
{	
	rezerve="";
	sureQenough=0;
	setTimeout("correction1p2dpart2()", 512);
}

function correction1p2dpart2()
{	
	origQtext=document.getElementById("txt1").innerHTML;
	origQtext+=document.getElementById("txt2").innerHTML;
	document.getElementById("txt1").innerHTML=origQtext;
	calculation1p2d();
	var part2=origQtext.substr(document.getElementById("txt1").innerHTML.length, origQtext.length);
	document.getElementById("txt2").innerHTML=part2;
}

function calculation1p2d()
{
	var cliQhQdiv1=document.getElementById("onePar2Div_part1").clientHeight;
	var scrQhQdiv1=document.getElementById("onePar2Div_part1").scrollHeight;
	
	if (cliQhQdiv1>=scrQhQdiv1)
	{
		sureQenough=document.getElementById("txt1").innerHTML.length;
		document.getElementById("txt1").innerHTML=rezerve;
	}
	
	rezerve=document.getElementById("txt1").innerHTML;
	var part=rezerve.substr(0, sureQenough+(rezerve.length-sureQenough)/2);
	document.getElementById("txt1").innerHTML=part;
	
	if (rezerve.length==part.length+1)
	{
		var finalQtext=document.getElementById("txt1").innerHTML;
		finalQtext=finalQtext.substr(0, sureQenough);
		document.getElementById("txt1").innerHTML=finalQtext;
		
		return;
	}

	calculation1p2d();
}
