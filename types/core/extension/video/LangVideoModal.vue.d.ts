declare function open(attrs: any): void;
declare const _default: import("vue").DefineComponent<{
    handleUpload: {
        type: FunctionConstructor;
        required: false;
    };
}, {
    open: typeof open;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    ok: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    handleUpload: {
        type: FunctionConstructor;
        required: false;
    };
}>> & {
    onOk?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
