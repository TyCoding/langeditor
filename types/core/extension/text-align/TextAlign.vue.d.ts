import { TextAlignOptions } from "@tiptap/extension-text-align";
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<Partial<TextAlignOptions>>;
        required: false;
        default: () => {
            types: string[];
        };
    };
    mini: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<Partial<TextAlignOptions>>;
        required: false;
        default: () => {
            types: string[];
        };
    };
    mini: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    mini: boolean;
    options: Partial<TextAlignOptions>;
}, {}>;
export default _default;
