declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    contentClass: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    mini: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    open: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    contentClass: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    mini: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    onOpen?: ((...args: any[]) => any) | undefined;
}, {
    mini: boolean;
    contentClass: string;
}, {}>, {
    button?(_: {}): any;
    content?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
