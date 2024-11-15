import { Editor } from "@tiptap/core";
import { EditorState, Selection, Transaction } from "@tiptap/pm/state";
import { CellSelection } from "@tiptap/pm/tables";
import { Node, ResolvedPos } from "@tiptap/pm/model";
import { EditorView } from "@tiptap/pm/view";
export declare const isRectSelected: (rect: any) => (selection: CellSelection) => boolean;
export declare const findTable: (selection: Selection) => {
    pos: number;
    start: number;
    depth: number;
    node: import("prosemirror-model").Node;
} | undefined;
export declare const isCellSelection: (selection: any) => boolean;
export declare const isColumnSelected: (columnIndex: number) => (selection: any) => boolean;
export declare const isRowSelected: (rowIndex: number) => (selection: any) => boolean;
export declare const isTableSelected: (selection: any) => boolean;
export declare const getCellsInColumn: (columnIndex: number | number[]) => (selection: Selection) => {
    pos: number;
    start: number;
    node: Node | null | undefined;
}[] | null;
export declare const getCellsInRow: (rowIndex: number | number[]) => (selection: Selection) => {
    pos: number;
    start: number;
    node: Node | null | undefined;
}[] | null;
export declare const getCellsInTable: (selection: Selection) => {
    pos: number;
    start: number;
    node: import("prosemirror-model").Node | null;
}[] | null;
export declare const findParentNodeClosestToPos: ($pos: ResolvedPos, predicate: (node: Node) => boolean) => {
    pos: number;
    start: number;
    depth: number;
    node: Node;
} | null;
export declare const findCellClosestToPos: ($pos: ResolvedPos) => {
    pos: number;
    start: number;
    depth: number;
    node: Node;
} | null;
export declare const selectColumn: (index: number) => (tr: Transaction) => Transaction;
export declare const selectRow: (index: number) => (tr: Transaction) => Transaction;
export declare const selectTable: (tr: Transaction) => Transaction;
export declare const analyzeCellSelection: (editor: Editor) => {
    isRowSelection: boolean;
    isColSelection: boolean;
    cellCount: number;
    mergedCellCount: number;
};
export declare const isTableCellSelected: ({ editor, view, state, from, }: {
    editor: Editor;
    view: EditorView;
    state: EditorState;
    from: number;
}) => boolean;
export declare const isColumnGripSelected: ({ editor, view, state, from, }: {
    editor: Editor;
    view: EditorView;
    state: EditorState;
    from: number;
}) => boolean;
export declare const isRowGripSelected: ({ editor, view, state, from, }: {
    editor: Editor;
    view: EditorView;
    state: EditorState;
    from: number;
}) => boolean;
