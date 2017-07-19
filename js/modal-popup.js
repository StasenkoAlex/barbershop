var link = document.querySelector (".login");
var modalLogin = document.querySelector (".modal-login");
var close = document.querySelectorAll (".modal-close");
var form = modalLogin.querySelector ("form"); 
var login = modalLogin.querySelector ("[name = login]");
var password = modalLogin.querySelector ("[name = password]");
var storage = localStorage.getItem("login");

var route = document.querySelector (".route");
var modalMap = document.querySelector (".modal-map");

link.addEventListener ("click", function(event) {
  event.preventDefault();
	console.log ("Клик по ссылке входа");
	modalLogin.classList.add("modal-login-open");

	if(storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
	
});

close[0].addEventListener ("click", function(event) {
	event.preventDefault();
	console.log("Закрываем попфп");
	modalLogin.classList.remove("modal-login-open");
});

form.addEventListener ("submit", function(event){
  console.log ("Отпрвляем форму");
  if(!login.value || !password.value) {
    event.preventDefault();
    modalLogin.classList.add("modal-login-error");
    console.log ("Не введены значения логина и пароля");
  } else {
  	localStorage.setItem("login", login.value);
  }
});



route.addEventListener ("click", function(event){
	event.preventDefault();
  modalMap.classList.add("modal-map-open");
});

close[1].addEventListener ("click", function(event) {
	event.preventDefault();
	modalMap.classList.remove("modal-map-open");
});

window.addEventListener ("keydown", function(event){
  if(event.keyCode === 27) {
  	if(modalLogin.classList.contains("modal-login-open")) {
      modalLogin.classList.remove("modal-login-open");
  	}
  	if(modalMap.classList.contains("modal-map-open")) {
  		modalMap.classList.remove("modal-map-open");
  	}
  }
});