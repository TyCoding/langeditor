import AiExt from "./AiExt.vue";
import { APIPromise } from "openai/core";
import { Stream } from "openai/streaming";
import OpenAI from "openai";
export type ChatCompletion = OpenAI.Chat.Completions;
export type ChatCompletionChunk = OpenAI.Chat.ChatCompletionChunk;
export declare const useAiState: import("@vueuse/core").CreateGlobalStateReturn<{
    isShowAiPopover: import("vue").Ref<boolean>;
}>;
export declare interface AiOption {
    completions: (text: string, key: string) => APIPromise<Stream<ChatCompletionChunk>>;
}
export type AiStatus = "completed" | "thinking" | "generating";
export { AiExt };
