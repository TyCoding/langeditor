import { BoldOptions } from "@tiptap/extension-bold";
import { PropType } from "vue";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    options: {
        type: PropType<Partial<BoldOptions>>;
        required: false;
    };
    mini: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<Partial<BoldOptions>>;
        required: false;
    };
    mini: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    mini: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
