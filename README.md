# bgiframe-native

native implementation of the jQuery bgiframe plugin

## Why/When should I use it?
* You're still working with problematic elements in IE (flash objects, etc) that makes the element not obey the document's z-index
* no jQuery dependency required


## Usage:

JavaScript:
```javascript
var bgIframe = require("bgiframe-native");
bgIframe.addBgIframe("ElementIdContainingFlash");

```

##TODOs

* only supports elementID for now, will add class selectors for next release
