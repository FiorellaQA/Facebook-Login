'use strict';

function login() {

	var login = $('<div>',{
		class: 'login'
	});

	var title = $('<h1>',{
		html: 'Log into Laboratoria'
	});

	var email = $('<input>',{
		type: 'email',
		class: 'username',
		placeholder: 'Correo Electrónico'
	});

	var password = $('<input>',{
		type: 'password',
		class: 'password',
		placeholder: 'Contraseña'
	});

	var loginButton = $('<button>',{
		html: 'Ingresar'
	});

	var faceButton = $('<button>',{
		html: 'Ingresar con Facebook'
	});

	login
		.append(title)
		.append(email)
		.append(password)
		.append(loginButton)
		.append(faceButton);

	loginButton.on('click',function (e) {
		e.preventDefault();
		alert('Not implement yet');
	});

	faceButton.on('click',function (e) {
		e.preventDefault();
		doLogin();
	});

	return login;
}