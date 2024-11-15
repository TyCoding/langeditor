declare const _default: import("vue").DefineComponent<{
    content: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    ok: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
}>> & {
    onOk?: ((...args: any[]) => any) | undefined;
}, {
    content: string;
}, {}>;
export default _default;
