function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false)
	{
		document.getElementById('erremail').innerHTML = "<span style='color:red'>Enter a valid email address!</span>";      
    } 
	else
	{
		document.getElementById('erremail').innerHTML = "<span style='color:green'>OK!</span>";
	}
}

function validatePassword(){
     document.getElementById('errpwd').innerHTML = "<span style='color:green'>OK!</span>";
}
	
function loginMessage(){
	if(document.form1.email.value!=null && document.form1.email.value!="" && document.form1.pwd.value!=null && document.form1.pwd.value!="")
	{
		var inputs = new Array();
		inputs[0] = document.getElementById('email').value;

		var errors = new Array();
		errors[0] = "<span style='color:red'>Please enter your email!</span>";

		var divs = new Array();
		divs[0] = "erremail";
		
		for (i in inputs)
		{
			var errMessage = errors[i];
			var div = divs[i];
		
			if (i==0)
			{
				var atpos=inputs[i].indexOf("@");
				var dotpos=inputs[i].lastIndexOf(".");
				if (atpos<1 || dotpos<atpos+2 || dotpos+2>=inputs[i].length)
					alert("Please enter a valid Email!");
				else
					alert("You Successfully Logged In!");
			}
		}
	}
	else
		alert("Please enter all the fields");
}
	

function createMessage(){
	if(document.form2.fName.value!=null && document.form2.fName.value!="" && document.form2.lName.value!=null && document.form2.lName.value!="" && document.form2.email.value!=null && document.form2.email.value!="" && document.form2.userid.value!=null && document.form2.userid.value!="" && document.form2.pwd.value!=null && document.form2.pwd.value!=""&& document.form2.confpwd.value!=null && document.form2.confpwd.value!="")
	{
		var inputs = new Array();
		inputs[0] = document.getElementById('email').value;

		var errors = new Array();
		errors[0] = "<span style='color:red'>Please enter your email!</span>";

		var divs = new Array();
		divs[0] = "erremail";
		
		for (i in inputs)
		{
			var errMessage = errors[i];
			var div = divs[i];
		
			if (i==0)
			{
				var atpos=inputs[i].indexOf("@");
				var dotpos=inputs[i].lastIndexOf(".");
				if ((atpos<1 || dotpos<atpos+2 || dotpos+2>=inputs[i].length) && (document.form2.confpwd.value != document.form2.pwd.value))
					alert("Invalid Email & Passwords are not matching");
				else if ((atpos<1 || dotpos<atpos+2 || dotpos+2>=inputs[i].length) || (document.form2.confpwd.value != document.form2.pwd.value))
				{
					if (atpos<1 || dotpos<atpos+2 || dotpos+2>=inputs[i].length)
						alert("Invalid Email");
					else
						alert("Passwords are not matching");
				}
				else
				alert("Registration Successful!");
			}
		}	
	}
	else
		alert("Please enter all the fields");
}
	
function check(){
	var inputs = new Array();
	inputs[0] = document.getElementById('fName').value;
	inputs[1] = document.getElementById('lName').value;
	inputs[2] = document.getElementById('email').value;
	inputs[3] = document.getElementById('userid').value;
	inputs[4] = document.getElementById('pwd').value;
	inputs[5] = document.getElementById('confpwd').value;

	var errors = new Array();
	errors[0] = "<span style='color:red'>Please enter your first name!</span>";
	errors[1] = "<span style='color:red'>Please enter your last name!</span>";
	errors[2] = "<span style='color:red'>Please enter your email!</span>";
	errors[3] = "<span style='color:red'>Please enter your user id!</span>";
	errors[4] = "<span style='color:red'>Please enter your password!</span>";
	errors[5] = "<span style='color:red'>Please confirm your password!</span>";

	var divs = new Array();
	divs[0] = "errfName";
	divs[1] = "errlName";
	divs[2] = "erremail";
	divs[3] = "erruserid";	
	divs[4] = "errpwd";
	divs[5] = "errconfpwd";
		
	for (i in inputs)
	{
		var errMessage = errors[i];
		var div = divs[i];
		
		if (inputs[i] == "")
			document.getElementById(div).innerHTML = errMessage;
		else if (i==2)
		{
			var atpos=inputs[i].indexOf("@");
			var dotpos=inputs[i].lastIndexOf(".");
			if (atpos<1 || dotpos<atpos+2 || dotpos+2>=inputs[i].length)
			document.getElementById('erremail').innerHTML = "<span style='color:red'>Enter a valid email address!</span>";
			else
			document.getElementById(div).innerHTML = "OK!";
		}
		else if (i==5)
		{
			var first = document.getElementById('pwd').value;
			var second = document.getElementById('confpwd').value;
			if (second != first)
				document.getElementById('errconfpwd').innerHTML = "<span style='color: red'>Your passwords don't match!</span>";
			else
				document.getElementById(div).innerHTML = "OK!";
		}
		else
			document.getElementById(div).innerHTML = "OK!";
	}
}
