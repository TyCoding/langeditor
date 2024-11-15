import { LinkOptions } from "@tiptap/extension-link";
import { EditorView } from "prosemirror-view";
import { MarkType } from "@tiptap/pm/model";
export interface LangLinkOptions extends LinkOptions {
    handleClick: (view: EditorView, pos: number, event: MouseEvent, type: MarkType) => boolean;
    handleKeyDown?: () => boolean;
}
export declare function useLink(options: Partial<LangLinkOptions>): import("@tiptap/core").Mark<LinkOptions, any>;
