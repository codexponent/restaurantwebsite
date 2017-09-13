/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*This is for the Image Slider*/

var imagecount = 1;
var total = 10;
var imagesliderlist = new Array();
	imagesliderlist[0] = "Gourment Pizza";
	imagesliderlist[1] = "Burger";
	imagesliderlist[2] = "Pie";
	imagesliderlist[3] = "Berry Cake";
	imagesliderlist[4] = "Sliced Fish";
	imagesliderlist[5] = "Kobe Beef";
	imagesliderlist[6] = "Meat";
	imagesliderlist[7] = "Diced Meat";
	imagesliderlist[8] = "Paneer";
	imagesliderlist[9] = "Lava Cake";

window.setInterval(function slide(){
	//This is just changing the image by Javascript	(1, 4)
	/*1*/var Image = document.getElementById('imageslider');	//#imageslider is in html
	imagecount = imagecount + 1;	//Increases everytime by 1
	if (imagecount > total){	//Validation of the image, if goes greater than total than reverts back to one
		imagecount = 1;
	}/*if(imagecount < 1){
		imagecount = total;
	}*///This is for the clicking backward on the image slider
	/*4*/Image.src = "../img/Special/img" + imagecount + ".jpg";	//Getting Image Directly By Javascript
	document.getElementById('imageslidercaption').innerHTML = imagesliderlist[imagecount - 1]; //Changing The Main Div

}, 3000);

/*This is for the Image Slider*/
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*This is for the Online Ordering System*/

function order(){
	var currentIndex = imagecount - 1;
	var imageName = imagesliderlist[currentIndex];
	document.getElementById('selectbutton').value = imageName;
}

function addtext2(){
	var x = document.getElementById("myForm2");
    var txt = "";
    var i;
    for (i = 0; i < x.length - 2; i++) {
        txt = txt + x.elements[i].value + "<br>";
    }
    document.getElementById("ordered").innerHTML = "Hello, " + x.elements[0].value + "<br />" + "You Ordered: " + x.elements[1].value + "<br />" + "Your Bill will be Made Right Away!!!";
}

function removetext2(){
	document.getElementById("myForm2").reset();
	document.getElementById("ordered").innerHTML = " ";	
}

/*This is for the Online Ordering System*/
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*This is for the Form */
function addtext(){
		var x = document.getElementById("myForm");
	    var txt = "";

	    for (var i = 0; i < x.length - 8; i++) {
	    	txt = txt + x.elements[i].name + ": " + x.elements[i].value + "<br>";
	    }
	    document.getElementById("formlist").innerHTML = "Your Personal Details <br />" + txt;

	    if (document.myForm.Gender[0].checked){
	    	txt = txt + "Gender: Male" + "<br />"
	    }else{
	    	txt = txt + "Gender: Female" + "<br />"
	    }
	    
	    for (var i = 11; i < x.length - 3; i++) {
	    	txt = txt + x.elements[i].name + ": " + x.elements[i].value + "<br>";
	    }

	    if (document.myForm.Checkbox.checked){
	    	txt = txt + "Subscription Enabled" + "<br />"
	    }else{
	    	txt = txt + "Subscription Disabled" + "<br />"
	    }

	    document.getElementById("formlist").innerHTML = "Your Personal Details <br />" + txt;
}

function validate(){ //I didnt validate the form by spanning on the side and sticked with alert because of my form design
	var fname = myForm.elements[0].value;
	var lname = myForm.elements[1].value;
	var uname = myForm.elements[2].value;
	var pname = myForm.elements[3].value;
	var rpname = myForm.elements[4].value;
	var phonen = myForm.elements[11].value;
	var ename = myForm.elements[12].value;

	if (fname == ""){
		//alert("Please Enter First Name");
	}else if(lname == ""){
		//alert("Please Enter Last Name");
	}else if(uname == ""){
		//alert("Please Enter Username");
	}else if(pname == ""){
		//alert("Please Enter Password");
	}else if(rpname == ""){
		//alert("Please Re-Enter Password");
	}else if(rpname != pname){
		//alert("The Password's Doesn't Match");
	}else if(document.myForm/*this myform is from (form) name, not id*/.Gender/*This is also Form Name*/[0].checked == false && document.myForm.Gender[1].checked == false){
		//alert("You Must Choose Any One Gender");
	}else if(phonen == ""){
		//alert("Please Re-Enter Phone Number");
	}
	else if(isNaN(phonen)==true){
		//alert("Please Re-Enter Numeric Phone Value");
	}else if((phonen.length) < 11){
		//alert("Phone Number Should Be AtLeast 10 digits");
	}else if(ename == ""){
		//alert("Please Enter Email ID");
	}else if((ename.indexOf("@",1)==-1) ||(ename.indexOf(".",1)==-1)){
		//alert("Invalid email");
	}else{
		addtext();
	}
	
}

function removetext(){
	document.getElementById("myForm").reset();
	document.getElementById("formlist").innerHTML = " ";	
}

/*This is for the Form */
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/