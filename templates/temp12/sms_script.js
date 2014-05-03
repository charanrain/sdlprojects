// SMS JavaScript Document

var time_variable;
function getXMLObject()  //XML OBJECT
{
   var xmlHttp = false;
   try {
     xmlHttp = new ActiveXObject("Msxml2.XMLHTTP")  // For Old Microsoft Browsers
   }
   catch (e) {
     try {
       xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")  // For Microsoft IE 6.0+
     }
     catch (e2) {
       xmlHttp = false   // No Browser accepts the XMLHTTP Object then false
     }
   }
   if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
     xmlHttp = new XMLHttpRequest();        //For Mozilla, Opera Browsers
   }
   return xmlHttp;  // Mandatory Statement returning the ajax object created
}
 
var xmlhttp = new getXMLObject();	//xmlhttp holds the ajax object
 
function ajaxFunction(hi) {
var d=document.myForm;
if(d.sms_name.value=="Name"){alert("Please Enter Your Name !"); d.sms_name.focus(); return false;}
if(isEmail(d.sms_email.value)==false || d.sms_email.value=="E-Mail-ID"){alert("Please Enter Your E-Mail ID !"); d.sms_email.focus(); return false;}
if(d.sms_number.value=="Mobile No"){alert("Please Enter Your Mobile No !"); d.sms_number.focus(); return false;}
if(d.mess.value=="Enter Your Requirement"){alert("Please Enter Your Requirement !"); d.mess.focus(); return false;}
var pp='';
if(hi==2){pp='../';}
  var getdate = new Date();  //Used to prevent caching during ajax call
  if(xmlhttp) { 
  	var sms_name = document.getElementById("sms_name").value;
	var sms_email = document.getElementById("sms_email").value;
	var sms_number = document.getElementById("sms_number").value;
	var mess = document.getElementById("mess").value;
	var sitename= document.getElementById("sitename").value;
	var sms_message=sms_name+"#@ "+sms_email+"#@ "+sms_number+"#@ "+mess+"#@ "+sitename;
    xmlhttp.open("POST",pp+"sendsms.php",true); //calling testing.php using POST method
    xmlhttp.onreadystatechange  = handleServerResponse;
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send("params=" + sms_message); //Posting txtname to PHP File 
  }
}
function handleServerResponse() {
   if (xmlhttp.readyState == 4) {
     if(xmlhttp.status == 200) {
       //document.getElementById("message").innerHTML="Thank you for Your Enquiry, We will Contact you Soon.."; //Update the HTML Form element 
	   document.getElementById("smsdiv").style.display='none';
	   document.getElementById("contactus").style.display='block';
     }
     else {
        alert("Error during AJAX call. Please try again");
     }
   }
}
//COUNTING CHARACTERS..
function txcount()	{
	d=document.myForm;
	//t_nam= "[^A-Z]|[a-z]|[0-9]";
	var maxlength=90;
	var tcount= maxlength - d.mess.value.length;
	document.getElementById("tc").innerHTML=tcount;
	if(d.mess.value.length>=maxlength)	{
	d.mess.value=d.mess.value.substring(0, maxlength);
	}
}
function chk(id){
	if(isNaN(document.getElementById(id).value))	{
	alert("Please Enter Only Numbers (0-9)..");
	document.getElementById(id).value='';
	document.getElementById(id).focus();
	}
}
function isEmail( string ) {		
	if(string.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
		return true;	else		return false;	}
function chg_font(id,t,val,val1){
	if(t=='s1' || val1!=val) { 
	document.getElementById(id).className="text_black";
	} else {
	document.getElementById(id).className="input_italic";
	}
}