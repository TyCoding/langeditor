import { PropType } from "vue";
import { HocuspocusProviderConfiguration } from "@hocuspocus/provider";
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<HocuspocusProviderConfiguration>;
        required: true;
    };
    user: {
        type: PropType<Record<string, any>>;
        required: false;
        default: () => {
            color: string;
        };
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<HocuspocusProviderConfiguration>;
        required: true;
    };
    user: {
        type: PropType<Record<string, any>>;
        required: false;
        default: () => {
            color: string;
        };
    };
}>>, {
    user: Record<string, any>;
}, {}>;
export default _default;
