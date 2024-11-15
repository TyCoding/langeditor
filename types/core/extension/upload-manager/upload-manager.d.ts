import { Extension } from "@tiptap/core";
import { UploadFunction, UploadInfo } from "@/core/extension/types";
import { type EditorState } from "@tiptap/pm/state";
export interface UploadManagerOptions {
    handleUpload?: UploadFunction;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        uploadManager: {
            /**
             * Add an image
             */
            upload: (uploadList: UploadInfo[]) => ReturnType;
        };
    }
}
export declare function findPlaceholder(state: EditorState, id: {}): number | null;
export declare function useUploadManager(options: UploadManagerOptions): Extension<any, any>;
