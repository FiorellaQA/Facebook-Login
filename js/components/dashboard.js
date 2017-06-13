'use strict';

function dashboard () {

	var container = $('<div>',{
		class: 'dashboard',
		html: 'Dashboard Component'
	});

	if(state.user){
		var name = $('<h1>',{
			html: state.user.name
		});
		var email = $('<p>',{
			html: state.user.email
		});

		container
			.append(name)
			.escape(email);

		var logout = $('<button>',{
			html: 'Salir'
		});

		logout.on('click',_ =>{
			FB.logout(response => {
				state.user = null;
				state.doRender();
			});
		});

		container.append(logout);
	}
	return container;
}
