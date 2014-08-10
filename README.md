# entityconvert.js
#### convert special characters in a string to their HTML or CSS charcode entities (useful for build tools et. al.)

The module works as AMD or CommonJS module and exports an Object exposing two methods: `.html(string)` and `.css(string)`. In a non-AMD and non-CommonJS environment `.entityconvert` will be attached to the global object.

AMD usage:
```javascript
require(['entityconvert'], function(entityconvert){
    var converted = entityconvert.html('We äll löve Ümläutß!');
    // => We &#228;ll l&#246;ve &#220;ml&#228;ut&#223;!
});
```

CommonJS usage:
```javascript
var entityconvert = require('entity-convert');
var converted = entityconvert.css('We äll löve Ümläutß!');
// => We \00e4ll l\00f6ve \00dcml\00e4ut\00df!
```

Script tag usage:
```html
<script src="entityconvert.js"></script>
<script>
	var converted = entityconvert.html('Yäy!');
	// => Y&#228;y!
</script>
```

Available via npm:
```sh
npm install entity-convert --save
```

##License
MIT © [Frederik Ring](http://www.frederikring.com)