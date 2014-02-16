(function(root, factory){

	if (typeof define === 'function' && define.amd){
		define(function(){
			return factory();
		});
	} else if (typeof exports === 'object'){
		module.exports = factory();
	} else {
		root.entityconvert = factory();
	}

}(this, function(){

	function eachChar(str, fn){
		str = str.split('');
		for (var i = 0, len = str.length; i < len; i++){
			str[i] = fn(str[i]);
		}
		return str.join('');
	}

	function replacer(mode){

		function getEnt(code){
			return (
				mode === 'css' ?
				['\\00', code.toString(16)] :
				['&#', code, ';']
			).join('');
		}

		return function(character){
			var index = character.charCodeAt(0);
			return (index > 127) ? getEnt(index) : character;
		};

	}

	function replaceBy(mode){
		return function(string){
			return eachChar(string, replacer(mode));
		};
	}

	return {
		css : replaceBy('css')
		, html : replaceBy('html')
	};

}));