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

	function replacer(mode){

		function ent(code){
			return (mode === 'css' ? ['\\00', code.toString(16)] : ['&#', code, ';']).join('');
		}

		return function(character){
			var index = character.charCodeAt(0);
			return (index > 127) ? ent(index) : character;
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

	return {
		css : replaceBy('css')
		, html : replaceBy('html')
	};

}));