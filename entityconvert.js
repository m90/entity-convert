function replacer(mode){
	return function(char){
		var index = char.charCodeAt(0);
		if (index > 127){
			return mode === 'css' ? ('\\00' + char.charCodeAt(0).toString(16)) : ('&#' + char.charCodeAt(0) + ';');
		} else {
			return char;
		}
	};
}

function replaceBy(mode){
	return function(string){
		var fn = replacer(mode);
		string = string.split('');
		for (var i = 0, len = string.length; i < len; i++){
			string[i] = fn(string[i]);
		}
		return string.join('');
	};
}

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(function(){
			return factory();
		});
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.entityconvert = factory();
	}
}(this, function(){
	return {
		css : replaceBy('css')
		, html : replaceBy('html')
	};
}));