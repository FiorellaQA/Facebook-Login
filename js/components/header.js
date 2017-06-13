'use strict';

function header () {
	var container = $('<header>');

	var img = $('<img>',{
		src: 'assets/img/logo.png'
	});

	container.append(img);

	return container;
}

