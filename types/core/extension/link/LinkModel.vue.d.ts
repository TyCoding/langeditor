declare const _default: import("vue").DefineComponent<{
    href: {
        type: StringConstructor;
        required: true;
    };
    text: {
        type: StringConstructor;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    ok: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    href: {
        type: StringConstructor;
        required: true;
    };
    text: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    onOk?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
