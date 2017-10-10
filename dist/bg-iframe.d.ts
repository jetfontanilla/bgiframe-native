export interface BgIframeOptions {
    top?: string | number;
    left?: string | number;
    width?: string | number;
    height?: string | number;
    src?: string;
}
export declare class BgIframe {
    static readonly OPTION_AUTO: string;
    static addBgIframe(elementId?: string, options?: BgIframeOptions): void;
    private static isInternetExplorer();
}
