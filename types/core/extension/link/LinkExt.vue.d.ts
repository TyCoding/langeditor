import { PropType } from "vue";
import { LangLinkOptions } from "./link";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    options: {
        type: PropType<Partial<LangLinkOptions>>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<Partial<LangLinkOptions>>;
        required: false;
    };
}>>, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
