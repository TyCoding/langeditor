import { UploadFunction } from "@/core/extension/types";
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    handleUpload: {
        type: PropType<UploadFunction>;
        required: true;
    };
    file: {
        type: PropType<File>;
        required: true;
    };
    onSuccess: {
        type: PropType<(url: string) => void>;
        required: true;
    };
    destroy: {
        type: PropType<() => void>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    handleUpload: {
        type: PropType<UploadFunction>;
        required: true;
    };
    file: {
        type: PropType<File>;
        required: true;
    };
    onSuccess: {
        type: PropType<(url: string) => void>;
        required: true;
    };
    destroy: {
        type: PropType<() => void>;
    };
}>>, {}, {}>;
export default _default;
