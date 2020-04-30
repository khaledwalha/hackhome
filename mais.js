const inputs = document.querySelectorAll(".input");
var forget = document.getElementById('kl') ; 
var username = document.getElementById('username') ; 
var password = document.getElementById('password') ; 
var s = document.querySelector('.one')
var m = document.querySelector('.two')
var error ; 
var money ; 


//lcheck 
document.getElementById("wfa").addEventListener("click",function(e){
	e.preventDefault() ;
	if(!username.value){
		error = "! u have to enter the Username ! "
	}
	else if(!password.value){
		error = "! u have to enter the Password ! "
	}
	if(password.value&&username.value){
		document.querySelector('.error').innerHTML =  ""; 
		window.location.href ="home.html"
		username.value = "" ; 
		password.value = "" ;  
		s.classList.remove("focus") ; 
		m.classList.remove("focus") ; 
	}
	else if(error){
		e.preventDefault() ;
		document.querySelector('.error').innerHTML = error ; 
		return false ;
	}
})
function addcl(){
	var parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	var parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}



// username.addEventListener("focus", function(){
// 	s.classList.add("focus") ; 
// });
// username.addEventListener("blur", function(){
// 	if (username.value==""){
// 	s.classList.remove("focus") ; 
// 	console.log(pff.classList) ;
// 	}
// });
// password.addEventListener("focus", function(){
// 	m.classList.add("focus") ; 
	
// });
// password.addEventListener("blur", function(e){
// 	if (password.value==""){
// 	m.classList.remove("focus") ; 
// 	}
// });
inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});