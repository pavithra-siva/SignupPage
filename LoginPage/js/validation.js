function validateFirstname(){
	var fname=document.getElementById('name').value;
	var patt = new RegExp("^(?!.*([A-Za-z])\1{2})[A-Za-z]+$");
	var patt1=new RegExp("\\b([a-zA-Z0-9])\\1\\1+\\b")
	if(patt.test(fname))
	{
		if(patt1.test(fname)){
			document.getElementById('errorMessage').innerHTML="<p>Name should be in alphabates only and shouldn't having more than 3 repeated characters'</p>";
		}
		else{
			document.getElementById('errorMessage').innerHTML="<p></p>";
		}
	}
	else
		{
		document.getElementById('errorMessage').innerHTML="<p>Name should be in alphabates only and shouldn't having more than 3 repeated characters'</p>";
		}
}