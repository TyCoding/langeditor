import OpenAI from "openai";
import { AiStatus } from "./index";
declare const _default: import("vue").DefineComponent<{
    client: {
        type: typeof OpenAI;
        required: true;
    };
    message: {
        type: StringConstructor;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    updateStatus: (value: AiStatus) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    client: {
        type: typeof OpenAI;
        required: true;
    };
    message: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    onUpdateStatus?: ((value: AiStatus) => any) | undefined;
}, {}, {}>;
export default _default;
