var loginLink = document.querySelector(".main-nav__user-login"); 
var loginForm = document.querySelector (".popup-login");
var close = document.querySelector(".popup-login__modal-close");
var closeMobi = document.querySelector(".btn-close");

loginLink.addEventListener("click", function(event) {
	event.preventDefault();
	loginForm.classList.add("popup-login--show");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	loginForm.classList.remove("popup-login--show");
});

closeMobi.addEventListener("click", function(event) {
	event.preventDefault();
	loginForm.classList.remove("popup-login--show");
});






