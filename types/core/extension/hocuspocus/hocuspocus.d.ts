import { HocuspocusProviderConfiguration } from "@hocuspocus/provider";
export declare function getRandomColor(): string;
export declare function useHocuspocus(options: HocuspocusProviderConfiguration, user: Record<string, any>): (import("@tiptap/core").Extension<import("@tiptap/extension-collaboration").CollaborationOptions, import("@tiptap/extension-collaboration").CollaborationStorage> | import("@tiptap/core").Extension<import("@tiptap/extension-collaboration-cursor").CollaborationCursorOptions, {
    users: {
        [key: string]: any;
        clientId: number;
    }[];
}>)[];
