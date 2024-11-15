import { MarkType } from "@tiptap/pm/model";
import { Plugin } from "@tiptap/pm/state";
import { EditorView } from "prosemirror-view";
type ClickHandlerOptions = {
    type: MarkType;
    handleClick?: (view: EditorView, pos: number, event: MouseEvent, type: MarkType) => boolean;
    handleKeyDown?: () => boolean;
};
export declare function clickHandler(options: ClickHandlerOptions): Plugin<any>;
export {};
