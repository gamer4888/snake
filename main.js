window.onload=(function(){
	apple("apple1");
	apple("apple2");
	apple("apple3");
})

var i_left=0;
var i_top=0;
var i_right=0;
var i_bottom=0;

var body_number=4;
var status_number=0;

document.onkeydown=function(event)
	{ 
        var e = event || window.event || arguments.callee.caller.arguments[0]; 
        if (e && e.keyCode==37)
        {
        	i_left=1;
        	i_top=0;
        	i_right=0;
        	i_bottom=0;
        	if (drect!="left")
    		{
    			loop("left")
    		}
        } 
        if (e && e.keyCode==38)
        {
        	i_left=0;
        	i_top=1;
        	i_right=0;
        	i_bottom=0;
        	if (drect!="top")
    		{
    			loop("top")
    		}
        }             
        if (e && e.keyCode==39)
        {
        	i_left=0;
        	i_top=0;
        	i_right=1;
        	i_bottom=0;
        	if (drect!="right")
    		{
    			loop("right")
    		}
        }
		if (e && e.keyCode==40)
		{
			i_left=0;
        	i_top=0;
        	i_right=0;
        	i_bottom=1;
        	if (drect!="bottom")
    		{
    			loop("bottom")
    		}
        }
    };

var drect="";
var anti_drect="";
var move_permission=1;
var del=0;
var random=0;
var apple_order=0;

function loop(drection)
{
	move(drection)
	setTimeout(function(){
		if (eval("i_"+drection)==1)
		{
			loop(drection);
		}
	},500)
}

function move(drection)
{
	if (drection!=anti_drect && move_permission==1)
	{
		var temp_left="";
		var temp_top="";
		if (drection=="left")
		{
			body1.style.borderRadius="18px 0px 0px 18px";
			var temp_left_2=(parseInt(body1.style.left)-35)+"px";
			var temp_top_2=body1.style.top;
		}
		if (drection=="right")
		{
			body1.style.borderRadius="0px 18px 18px 0px";
			var temp_left_2=(parseInt(body1.style.left)+35)+"px";
			var temp_top_2=body1.style.top;
		}
		if (drection=="top")
		{
			body1.style.borderRadius="18px 18px 0px 0px";
			var temp_left_2=body1.style.left;
			var temp_top_2=(parseInt(body1.style.top)-35)+"px";
		}
		if (drection=="bottom")
		{
			body1.style.borderRadius="0px 0px 18px 18px";
			var temp_left_2=body1.style.left;
			var temp_top_2=(parseInt(body1.style.top)+35)+"px";
		}
		body_number_box();
		for (var i=1;i<=body_number;i++)
		{
			temp_left=eval("body"+i).style.left;
			temp_top=eval("body"+i).style.top;
			eval("body"+i).style.left=temp_left_2;
			eval("body"+i).style.top=temp_top_2;
			temp_left_2=temp_left;
			temp_top_2=temp_top;
		}
		drect=drection;
		if (drection=="left")
		{
			anti_drect="right";
		}
		if (drection=="right")
		{
			anti_drect="left";
		}
		if (drection=="top")
		{
			anti_drect="bottom";
		}
		if (drection=="bottom")
		{
			anti_drect="top";
		}
		setTimeout(function(){charge()},1000)
	}
}

function apple(apple_id)
{	
	var temp_left=Math.floor(Math.random()*32)*35+"px";
	var temp_top=Math.floor(Math.random()*18)*35+"px";
	for (var i=1;i<=status_number;i++)
	{
		while (temp_left==eval('status'+i).style.left && temp_top==eval('status'+i).style.top)
		{	
			temp_left=Math.floor(Math.random()*32)*35+"px";
			temp_top=Math.floor(Math.random()*18)*35+"px";
		}
	}
	document.getElementById(apple_id).style.left=temp_left;
	document.getElementById(apple_id).style.top=temp_top;
	var numbers=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
	if (Math.floor(Math.random()*10)==2 && body_number>4)
	{
		apple_order=parseInt(apple_id.substr(6,1));
		random=Math.floor(Math.random()*(body_number-4)+5);
		document.getElementById(apple_id).style.backgroundColor=document.getElementById("body"+random).style.backgroundColor;
	}
	else
	{
		document.getElementById(apple_id).style.backgroundColor="#"+numbers[Math.floor(Math.random()*16)]+numbers[Math.floor(Math.random()*16)]+numbers[Math.floor(Math.random()*16)]+numbers[Math.floor(Math.random()*16)]+numbers[Math.floor(Math.random()*16)]+numbers[Math.floor(Math.random()*16)];
	}
}

function test(msg)
{
	window.alert(msg);
}

function body_number_box()
{
	document.getElementById("body_numbers").innerHTML=body_number;
}
