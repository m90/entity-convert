var ec = require('./entityconvert');
var assert = require('assert');

describe('entityconvert', function(){
	describe('#html()', function(){
		it('should convert special characters to html entities', function(){
			assert.equal(
				ec.html('We äll löve Ümläutß!')
				, 'We &#228;ll l&#246;ve &#220;ml&#228;ut&#223;!'
			);
		});
		it('should leave latin input untouched', function(){
			assert.equal(
				ec.html('abcdefghijklmnopqrstuvwxyz')
				, 'abcdefghijklmnopqrstuvwxyz'
			);
		});
		// it('should leave wrapping html untouched', function(){
		// 	assert.equal(
		// 		ec.html('<span class="foo" data-foo>Ümläut</span>')
		// 		, '<span class="foo" data-foo>&#220;ml&#228;ut</span>'
		// 	);
		// });
	});
	describe('#css()', function(){
		it('should convert special characters to css entities', function(){
			assert.equal(
				ec.css('We äll löve Ümläutß!')
				, 'We \\00e4 ll l\\00f6 ve \\00dc ml\\00e4 ut\\00df !'
			);
		});
		it('should leave latin input untouched', function(){
			assert.equal(
				ec.css('abcdefghijklmnopqrstuvwxyz')
				, 'abcdefghijklmnopqrstuvwxyz'
			);
		});
		// it('should leave css selectors untouched', function(){
		// 	assert.equal(
		// 		ec.css('p.foo#bar::before{content:\'Ümläut\';}')
		// 		, 'p.foo#bar::before{content:\'\\00dc ml\\00e4 ut\';}'
		// 	);
		// });
	});
});
