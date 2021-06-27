[![npm version](https://badge.fury.io/js/bgiframe-native.svg)](https://www.npmjs.com/package/bgiframe-native)

# bgiframe-native

## Archive Notice:
* since Flash has been deprecated on all major browsers and support has been limited to a very small subset, I will be archiving this project

## Why/When should I use it?
* You're still working with problematic elements in IE (flash objects, etc) that makes the element not obey the document's z-index
* no need for a jQuery dependency, or any other node dependencies


## Usage

### JavaScript
   ```javascript
   var bgIframe = require("bgiframe-native");
   
   // basic
   bgIframe.addBgIframe("elementName");
   bgIframe.addBgIframe("#elementId");
   bgIframe.addBgIframe(".className");
   
   // more advanced usage using options
   bgIframe.addBgIframe("#elementId", {width: "50vw", height: "30em"});
   
   ```
   
### TypeScript
   ```typecript
   import { BgIframe } from "bgiframe-native";
   
   // basic
   BgIframe.addBgIframe("elementName");
   BgIframe.addBgIframe("#elementId");
   BgIframe.addBgIframe(".className");
   
   // more advanced usage using options
   BgIframe.addBgIframe("#elementId", {width: "50vw", height: "30em"});
   
   ```
## Options

* `top` *(number | string)*: The iframe must be offset to the top by the width of the top border. This should be a negative number representing the border-top-width. If a number is used here, pixels will be assumed. Otherwise, be sure to specify a unit. An expression could also be used. By default the value is "auto" which will use the elements border top width. If a number is passed, unit used will be in pixels.
* `left` *(number | string)*: The iframe must be offset to the left by the width of the left border. This should be a negative number representing the border-left-width. If a number is is used here, pixels will be assumed. Otherwise, be sure to specify a unit. An expression could also be used. By default the value is "auto" which will use the elements border left width. If a number is passed, unit used will be in pixels.
* `width` *(number | string)*: This is the width of the iframe. If a number is used here, pixels will be assume. Otherwise, be sure to specify a unit. An expression could also be used. By default the value is "auto" which will the offsetWidth of the element. If a number is passed, unit used will be in pixels.
* `height` *(number | string)*: This is the height of the iframe. If a number is used here, pixels will be assume. Otherwise, be sure to specify a unit. An expression could also be used. By default the value is "auto" which will use the offsetHeight of the element. If a number is passed, unit used will be in pixels.
* `src` *(string)*: This setting is provided so that one could change  the src of the iframe to whatever they need. Default: "javascript:false;"



### Attribution
this project is based on the native implementation of the jQuery bgiframe plugin: https://github.com/brandonaaron/bgiframe
