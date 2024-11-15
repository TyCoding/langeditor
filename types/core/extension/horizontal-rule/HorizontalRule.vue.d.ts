import { HorizontalRuleOptions } from "@tiptap/extension-horizontal-rule";
import { PropType } from "vue";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    options: {
        type: PropType<Partial<HorizontalRuleOptions>>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<Partial<HorizontalRuleOptions>>;
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
