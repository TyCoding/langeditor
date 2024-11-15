import { Editor } from "@tiptap/vue-3";
declare function getInstance(): Editor | undefined;
declare function reload(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    page: {
        type: BooleanConstructor;
        default: boolean;
    };
    toolbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    bubbleMenu: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    to: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    tocRight: {
        type: BooleanConstructor;
        default: boolean;
    };
    language: {
        type: () => "zh-CN" | "en-US";
        default: string;
    };
    contentClass: {
        type: StringConstructor;
        default: string;
    };
}, {
    getInstance: typeof getInstance;
    reload: typeof reload;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    page: {
        type: BooleanConstructor;
        default: boolean;
    };
    toolbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    bubbleMenu: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    to: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    tocRight: {
        type: BooleanConstructor;
        default: boolean;
    };
    language: {
        type: () => "zh-CN" | "en-US";
        default: string;
    };
    contentClass: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    contentClass: string;
    to: string;
    language: "zh-CN" | "en-US";
    bubbleMenu: boolean;
    page: boolean;
    tocRight: boolean;
    toolbar: boolean;
    dark: boolean;
    modelValue: string;
    readonly: boolean;
}, {}>, {
    footer?(_: {
        data: {
            characters: number;
        };
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
