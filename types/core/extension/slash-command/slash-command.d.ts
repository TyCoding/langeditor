import { Editor, Extension, Range } from "@tiptap/core";
import { SuggestionKeyDownProps, SuggestionOptions } from "@tiptap/suggestion";
import { Ref } from "vue";
export interface SlashCommandOptions {
    element: HTMLElement;
}
export type SlashCommandData = {
    editor?: Editor;
    query?: string;
    range?: Range;
};
export type SlashItemsQueryFn = (query: string) => any[];
export type SlashRenderFn = SuggestionOptions["render"];
export type SlashCommandKeyDownFn = (props: SuggestionKeyDownProps) => boolean;
export declare let keyDownFn: SlashCommandKeyDownFn;
export declare function overwriteItems(fn: SlashItemsQueryFn): void;
export declare function overwriteRender(fn: SlashRenderFn): void;
export declare function overwriteKeyDown(fn: SlashCommandKeyDownFn): void;
export declare function useSlashCommandData(): Ref<SlashCommandData>;
export declare function useSlashCommand(options?: Partial<SlashCommandOptions>): Extension<SlashCommandOptions, any>;
