import { Extension, Range } from "@tiptap/core";
import { Node } from "prosemirror-model";
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        copyPaste: {
            copyRange: (range: Range, node: Node) => ReturnType;
        };
    }
}
export declare function useCopyPaste(): Extension<any, any>;
