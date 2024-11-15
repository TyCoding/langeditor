declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{}, {
    mini: boolean;
    title: string;
    isActive: Function;
    color?: string | undefined;
    icon?: string | Function | Record<string, any> | undefined;
    action?: Function | undefined;
    $props: {
        readonly mini?: boolean | undefined;
        readonly title?: string | undefined;
        readonly isActive?: Function | undefined;
        readonly color?: string | undefined;
        readonly icon?: string | Function | Record<string, any> | undefined;
        readonly action?: Function | undefined;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, {
    text?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
