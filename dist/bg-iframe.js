"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BgIframe = (function () {
    function BgIframe() {
    }
    BgIframe.addBgIframe = function (querySelector, options) {
        if (options === void 0) { options = {}; }
        if (!querySelector || !BgIframe.isInternetExplorer()) {
            return;
        }
        var elements = document.body.querySelectorAll(querySelector);
        if (!elements || !elements.length) {
            return;
        }
        var DEFAULT_OPTIONS = {
            top: BgIframe.OPTION_AUTO,
            left: BgIframe.OPTION_AUTO,
            width: BgIframe.OPTION_AUTO,
            height: BgIframe.OPTION_AUTO,
            src: "javascript:false;"
        };
        var currentOptions = Object.assign({}, DEFAULT_OPTIONS, options);
        BgIframe.attachIframe(currentOptions, elements);
    };
    BgIframe.attachIframe = function (options, elements) {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (!element || !element.parentNode) {
                continue;
            }
            var top_1 = options.top == BgIframe.OPTION_AUTO || BgIframe.isPropertyUndefined(options, "top")
                ? BgIframe.numberToPixels(0 - Math.round(element.clientTop || 0))
                : BgIframe.numberToPixels(options.top);
            var left = options.left == BgIframe.OPTION_AUTO || BgIframe.isPropertyUndefined(options, "left")
                ? BgIframe.numberToPixels(0 - Math.round(element.clientLeft || 0))
                : BgIframe.numberToPixels(options.left);
            var width = options.width == BgIframe.OPTION_AUTO || BgIframe.isPropertyUndefined(options, "width")
                ? BgIframe.numberToPixels(element.offsetWidth)
                : BgIframe.numberToPixels(options.width);
            var height = options.height == BgIframe.OPTION_AUTO || BgIframe.isPropertyUndefined(options, "height")
                ? BgIframe.numberToPixels(element.offsetHeight)
                : BgIframe.numberToPixels(options.height);
            var iframe = document.createElement("iframe");
            if (options.src) {
                iframe.src = options.src;
            }
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("tabindex", "-1");
            iframe.setAttribute("style", "display:block;position:absolute;z-index:-1;top:" + top_1 + ";left:" + left + ";width:" + width + ";height:" + height + ";opacity:0;");
            element.parentNode.insertBefore(iframe, element);
        }
    };
    BgIframe.isPropertyUndefined = function (options, property) {
        return !(property in options) || typeof options[property] == "undefined";
    };
    BgIframe.numberToPixels = function (value) {
        if (typeof value == "undefined") {
            return "0";
        }
        if (typeof value === "number") {
            if (Number.isFinite(value)) {
                return value.toString() + "px";
            }
            return "0";
        }
        if (Number.isNaN(parseFloat(value))) {
            return value;
        }
        return value + "px";
    };
    BgIframe.isInternetExplorer = function () {
        var userAgent = navigator.userAgent;
        return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident") !== -1;
    };
    BgIframe.OPTION_AUTO = "auto";
    return BgIframe;
}());
exports.BgIframe = BgIframe;
exports.default = BgIframe;
//# sourceMappingURL=bg-iframe.js.map