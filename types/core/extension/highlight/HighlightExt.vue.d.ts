import { PropType } from "vue";
import { HighlightOptions } from "@tiptap/extension-highlight";
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<Partial<HighlightOptions>>;
        required: false;
        default: () => {
            multicolor: boolean;
        };
    };
    mini: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<Partial<HighlightOptions>>;
        required: false;
        default: () => {
            multicolor: boolean;
        };
    };
    mini: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    mini: boolean;
    options: Partial<HighlightOptions>;
}, {}>;
export default _default;
