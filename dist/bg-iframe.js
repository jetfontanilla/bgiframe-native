"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BgIframe = (function () {
    function BgIframe() {
    }
    BgIframe.addBgIframe = function (elementId, options) {
        if (options === void 0) { options = {}; }
        if (!elementId || !BgIframe.isInternetExplorer()) {
            return;
        }
        var element = document.getElementById(elementId);
        if (!element) {
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
        var top = currentOptions.top == BgIframe.OPTION_AUTO || !currentOptions.top
            ? BgIframe.numberToPixels(0 - Math.round(element.clientTop || 0))
            : BgIframe.numberToPixels(currentOptions.top);
        var left = currentOptions.left == BgIframe.OPTION_AUTO || !currentOptions.left
            ? BgIframe.numberToPixels(0 - Math.round(element.clientLeft || 0))
            : BgIframe.numberToPixels(currentOptions.left);
        var width = currentOptions.width == BgIframe.OPTION_AUTO || !currentOptions.width
            ? BgIframe.numberToPixels(element.offsetWidth)
            : BgIframe.numberToPixels(currentOptions.width);
        var height = currentOptions.height == BgIframe.OPTION_AUTO || !currentOptions.height
            ? BgIframe.numberToPixels(element.offsetHeight)
            : BgIframe.numberToPixels(currentOptions.height);
        var iframe = document.createElement("iframe");
        if (currentOptions.src) {
            iframe.src = currentOptions.src;
        }
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("tabindex", "-1");
        iframe.setAttribute("style", "display:block;position:absolute;z-index:-1;top:" + top + ";left:" + left + ";width:" + width + ";height:" + height + ";opacity:0;");
        if (element.parentNode) {
            element.parentNode.insertBefore(iframe, element);
        }
    };
    BgIframe.numberToPixels = function (value) {
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
//# sourceMappingURL=bg-iframe.js.map