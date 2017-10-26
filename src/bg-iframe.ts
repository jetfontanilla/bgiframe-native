export interface BgIframeOptions {
    top?: string | number;
    left?: string | number;
    width?: string | number;
    height?: string | number;
    src?: string;
}

export class BgIframe {
    static readonly OPTION_AUTO = "auto";

    static addBgIframe(querySelector?: string, options: BgIframeOptions = {}): void {
        if (!querySelector || !BgIframe.isInternetExplorer()) {
            return;
        }

        let elements = document.body.querySelectorAll(querySelector);
        if (!elements || !elements.length) {
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

        BgIframe.attachIframe(currentOptions, elements as NodeListOf<HTMLElement>);
    }

    private static attachIframe(options: BgIframeOptions, elements: NodeListOf<HTMLElement>): void {
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            if (!element || !element.parentNode) {
                continue;
            }

            let top = options.top == BgIframe.OPTION_AUTO || BgIframe.isPropertyUndefined(options, "top")
                ? BgIframe.numberToPixels(0 - Math.round(element.clientTop || 0))
                : BgIframe.numberToPixels(options.top);
            let left = options.left == BgIframe.OPTION_AUTO || BgIframe.isPropertyUndefined(options, "left")
                ? BgIframe.numberToPixels(0 - Math.round(element.clientLeft || 0))
                : BgIframe.numberToPixels(options.left);
            let width = options.width == BgIframe.OPTION_AUTO || BgIframe.isPropertyUndefined(options, "width")
                ? BgIframe.numberToPixels(element.offsetWidth)
                : BgIframe.numberToPixels(options.width);
            let height = options.height == BgIframe.OPTION_AUTO || BgIframe.isPropertyUndefined(options, "height")
                ? BgIframe.numberToPixels(element.offsetHeight)
                : BgIframe.numberToPixels(options.height);

            let iframe = document.createElement("iframe");
            if (options.src) {
                iframe.src = options.src;
            }
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("tabindex", "-1");
            iframe.setAttribute("style", `display:block;position:absolute;z-index:-1;top:${top};left:${left};width:${width};height:${height};opacity:0;`);
            element.parentNode.insertBefore(iframe, element);
        }
    }

    private static isPropertyUndefined(options: BgIframeOptions, property: string) {
        return !(property in options) || typeof options[property] == "undefined";
    }

    private static numberToPixels(value?: number | string): string {
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
    }

    private static isInternetExplorer(): boolean {
        let userAgent = navigator.userAgent;
        return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident") !== -1;
    }

}
