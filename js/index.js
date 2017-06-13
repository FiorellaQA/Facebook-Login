'use strict';

function render(root) {
	root.empty();

	var wrapper = $('<div>',{
		class: 'wrapper'
	});

	wrapper.append(header());

	if(state.user == null){
		wrapper.append(login());
	} else {
		wrapper.append(dashboard());
	}

	root.append(wrapper);
}

var state = {
	user: null,
	status: null
};

$(function() {
	var root = $('#root');
	render(root);
	state.doRender = render.bind(null,root);
});