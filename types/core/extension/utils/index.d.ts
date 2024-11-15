import { Editor, Mark, Node } from "@tiptap/core";
import { ShallowRef } from "vue";
import { Extension } from "@tiptap/core";
export declare function useEditorInstance(): ShallowRef<Editor>;
export declare function injectExtension(extension: Extension | Node | Mark): void;
export declare function uninjectExtension(extName: string): void;
export declare function onEditorCreated(fn: () => void): ShallowRef<Editor>;
