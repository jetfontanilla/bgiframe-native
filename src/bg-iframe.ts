export interface BgIframeOptions {
    top?: string | number;
    left?: string | number;
    width?: string | number;
    height?: string | number;
    src?: string;
}

export class BgIframe {
    static readonly OPTION_AUTO = "auto";

    static addBgIframe(elementId?: string, options: BgIframeOptions = {}): void {
        if (!elementId || !BgIframe.isInternetExplorer()) {
            return;
        }

        let element = document.getElementById(elementId);
        if (!element) {
            return;
        }
        const DEFAULT_OPTIONS: BgIframeOptions = {
            top: BgIframe.OPTION_AUTO,
            left: BgIframe.OPTION_AUTO,
            width: BgIframe.OPTION_AUTO,
            height: BgIframe.OPTION_AUTO,
            src: "javascript:false;"
        };
        let currentOptions: BgIframeOptions = Object.assign({}, DEFAULT_OPTIONS, options);

        let top = currentOptions.top == BgIframe.OPTION_AUTO || !currentOptions.top
            ? BgIframe.numberToPixels(0 - Math.round(element.clientTop || 0))
            : BgIframe.numberToPixels(currentOptions.top);
        let left = currentOptions.left == BgIframe.OPTION_AUTO || !currentOptions.left
            ? BgIframe.numberToPixels(0 - Math.round(element.clientLeft || 0))
            : BgIframe.numberToPixels(currentOptions.left);
        let width = currentOptions.width ==  BgIframe.OPTION_AUTO || !currentOptions.width
            ? BgIframe.numberToPixels(element.offsetWidth)
            : BgIframe.numberToPixels(currentOptions.width);
        let height = currentOptions.height ==  BgIframe.OPTION_AUTO || !currentOptions.height
            ? BgIframe.numberToPixels(element.offsetHeight)
            : BgIframe.numberToPixels(currentOptions.height);

        let iframe = document.createElement("iframe");
        if (currentOptions.src) {
            iframe.src = currentOptions.src;
        }
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("tabindex", "-1");
        iframe.setAttribute("style", `display:block;position:absolute;z-index:-1;top:${top};left:${left};width:${width};height:${height};opacity:0;`);

        if (element.parentNode) {
            element.parentNode.insertBefore(iframe, element);
        }
    }

    private static numberToPixels(value: number | string): string {
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
    }

    private static isInternetExplorer(): boolean {
        let userAgent = navigator.userAgent;
        return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident") !== -1;
    }

}
