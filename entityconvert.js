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

			// convertedCode string must 
			// always be 5 characters long
			var encodeTemplate = '\\u0000',
				encodeTarget  = code.toString(16),
				encodeTargetLen = encodeTarget.length,
				convertedCode = encodeTemplate.slice(0,-encodeTargetLen) + encodeTarget;

			return (
				mode === 'css' ?
				[convertedCode] :
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