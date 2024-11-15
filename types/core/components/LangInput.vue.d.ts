declare const _default: import("vue").DefineComponent<{
    isSmall: {
        type: BooleanConstructor;
        require: boolean;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        require: boolean;
        default: boolean;
    };
    input: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
    icon: {
        type: FunctionConstructor;
        require: boolean;
        default: undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    ok: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    isSmall: {
        type: BooleanConstructor;
        require: boolean;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        require: boolean;
        default: boolean;
    };
    input: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
    icon: {
        type: FunctionConstructor;
        require: boolean;
        default: undefined;
    };
}>> & {
    onOk?: ((...args: any[]) => any) | undefined;
}, {
    loading: boolean;
    icon: Function;
    input: string;
    isSmall: boolean;
    placeholder: string;
}, {}>;
export default _default;
