var bees=new Array();
var beeQcnt=0;
var correctStartPos=0;


function noDir(beeQid)
{
	var posHor=document.getElementById(beeQid).style.left;
	var posVer=document.getElementById(beeQid).style.top;
	var num1=0, num2;
	num1=posVer.substr(0, posVer.indexOf("px"));
	num2=posHor.substr(0, posHor.indexOf("px"));
	
	var randNum=getRandNum(4);
	if (randNum==2||randNum==3)
		num1=num1*1-randNum;
	else
		num1=num1*1+randNum;
	
	randNum=getRandNum(4);
	if (randNum==2||randNum==3)
		num2=num2*1-randNum;
	else
		num2=num2*1+randNum;

	var pv1=document.body.clientWidth;
	if (num2>=pv1)
		document.getElementById(beeQid).style.display="none";
	else
		document.getElementById(beeQid).style.display="block";
	
	document.getElementById(beeQid).style.top=num1+"px";
	document.getElementById(beeQid).style.left=num2+"px";
//	alert(num1+"_"+num2);
}


function moveToLeft()
{
	
}


function moveToRight()
{
	alert("34");
}

function moreBee()
{
	
	window.scrollTo(0, 0);
	setTimeout("createBee()", 1000);
	setTimeout("createBee()", 1000);
	setTimeout("createBee()", 1000);
	setTimeout("createBee()", 1000);
}

function createBee()
{
	var bee=new HoneyBee();
	bees[beeQcnt-1]=bee;
	bees[beeQcnt-1].intervalRef=setInterval(
	 (function(id){return function(){noDir(id);};})(bees[beeQcnt-1].id), //IIFE + CLOSURE
	 64);
}

function HoneyBee()
{
	var flyingBee=document.createElement("img");
	flyingBee.setAttribute("src", "imgFolder/honeybee.png");
	flyingBee.setAttribute("alt", "highFly");
	flyingBee.setAttribute("id", "testbee"+beeQcnt);
        flyingBee.setAttribute("class", "honeyBee");
        
	/*
	var randNum=getRandNum(3);
	if (randNum==1)
	{
		randNum=getRandNum(2);
		randNum==1?this.direction="left":this.direction="right";
	}
	else
	if (randNum==2)
	{
		this.direction="left";
	}
	else
	if (randNum==3)
	{
		this.direction="right";
	}
        */
	let img = document.getElementById("img");
//        console.log(img.width, img.height, document.getElementById("td3").clientWidth);
        
        let pv1 = (document.getElementById("td3").clientWidth - img.width) / 2 ;
        pv1 += Math.ceil(img.width * 0.17) + correctStartPos;
        pv1 += "px";
        
        flyingBee.style.left=pv1;
        flyingBee.style.top=Math.ceil(img.height * 0.27) + "px";
        //alert(flyingBee.style.top);
        
	flyingBee.style.position="absolute";
        
	document.getElementById("startPos").appendChild(flyingBee);

	this.id="testbee"+beeQcnt++;
	this.intervalRef=null;
//	this.viewInfo=viewQinfo;
	

}

//function viewQinfo()
//{
//	alert(this.direction+" ___ "+" ___ "+this.id);
//}

function actualCount()
{
	return beeQcnt;
}

function getRandNum(num)
{
	var res=0;

	var randNum=Math.random();
	while(randNum<10000)
		randNum*=10;
	randNum=randNum%num;
	
	for (var i=0; i<randNum; i++)
		res++;
	
	return res;
}

function destructor()
{
	for (var i=0; i<bees.length; i++)
	{
		clearInterval(bees[i].intervalRef);
		document.getElementById(bees[i].id).remove();
	}
	
	for ( ; beeQcnt>0; beeQcnt--)
		bees.shift();

}

window.addEventListener("load", function()
{
	for (var i=0; i<4; i++)
	{
		correctStartPos+=getRandNum(100);
		createBee();

		correctStartPos=0;
	}
	correctStartPos=0;
	
	
});
