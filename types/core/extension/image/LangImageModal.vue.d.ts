import { PropType } from "vue";
import { ImageAttrsOptions } from "@/core/extension/image/image";
import { UploadFunction } from "@/core/extension/types";
declare function open(attrs?: ImageAttrsOptions): void;
declare const _default: import("vue").DefineComponent<{
    handleUpload: {
        type: PropType<UploadFunction>;
        required: false;
    };
}, {
    open: typeof open;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    ok: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    handleUpload: {
        type: PropType<UploadFunction>;
        required: false;
    };
}>> & {
    onOk?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
