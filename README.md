# bgiframe-native

native implementation of the jQuery bgiframe plugin: https://github.com/brandonaaron/bgiframe

## Why/When should I use it?
* You're still working with problematic elements in IE (flash objects, etc) that makes the element not obey the document's z-index
* no jQuery dependency required


## Usage

```javascript
var bgIframe = require("bgiframe-native");

// basic
bgIframe.addBgIframe("ElementIdContainingFlash1");

// more advanced usage using options
bgIframe.addBgIframe("ElementIdContainingFlash2", {width: "600px", height: "400px"});

```
## Options

* `top` *(String)*: The iframe must be offset to the top by the width of the top border. This should be a negative number representing the border-top-width. If a number is used here, pixels will be assumed. Otherwise, be sure to specify a unit. An expression could also be used. By default the value is "auto" which will use the elements border top width as calculated by jQuery.
* `left` *(String)*: The iframe must be offset to the left by the width of the left border. This should be a negative number representing the border-left-width. If a number is is used here, pixels will be assumed. Otherwise, be sure to specify a unit. An expression could also be used. By default the value is "auto" which will use the elements border left width as calculated by jQuery.
* `width` *(String)*: This is the width of the iframe. If a number is used here, pixels will be assume. Otherwise, be sure to specify a unit. An expression could also be used. By default the value is "auto" which will the offsetWidth of the element.
* `height` *(String)*: This is the height of the iframe. If a number is used here, pixels will be assume. Otherwise, be sure to specify a unit. An expression could also be used. By default the value is "auto" which will use the offsetHeight of the element.
* `src` *(String)*: This setting is provided so that one could change  the src of the iframe to whatever they need. Default: "javascript:false;"


## TODOs

* only supports elementID for now, will add class selectors for next release
* make options support both numbers and string, only accepts string for v1
