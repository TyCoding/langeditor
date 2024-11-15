import { Extension } from "@tiptap/core";
import LineHeightExt from "./LineHeight.vue";
export interface LineHeightOptions {
    types: string[];
    lineHeights: string[];
    defaultHeight: string;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        lineHeight: {
            setLineHeight: (lineHeight: string) => ReturnType;
            unsetLineHeight: () => ReturnType;
        };
    }
}
export declare function useLineHeight(): Extension<LineHeightOptions, any>;
export { LineHeightExt };
