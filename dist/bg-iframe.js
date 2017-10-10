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
        var top = currentOptions.top == BgIframe.OPTION_AUTO ? (0 - Math.round(element.clientTop || 0)).toString() + "px" : currentOptions.top;
        var left = currentOptions.left == BgIframe.OPTION_AUTO ? (0 - Math.round(element.clientLeft || 0)).toString() + "px" : currentOptions.left;
        var width = currentOptions.width == BgIframe.OPTION_AUTO ? element.offsetWidth.toString() + "px" : currentOptions.width;
        var height = currentOptions.height == BgIframe.OPTION_AUTO ? element.offsetHeight.toString() + "px" : currentOptions.height;
        var iframe = document.createElement("iframe");
        iframe.src = currentOptions.src;
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("tabindex", "-1");
        iframe.setAttribute("style", "display:block;position:absolute;z-index:-1;top:" + top + ";left:" + left + ";width:" + width + ";height:" + height + ";opacity:0;");
        if (element.parentNode) {
            element.parentNode.insertBefore(iframe, element);
        }
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