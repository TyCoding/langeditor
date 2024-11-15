import "@tiptap/extension-text-style";
import { Extension } from "@tiptap/core";
import FontFamilyExt from "./FontFamily.vue";
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        fontFamily: {
            setFontFamily: (fontFamily: string) => ReturnType;
            unsetFontFamily: () => ReturnType;
        };
    }
}
export declare function useFontFamily(): Extension<any, any>;
export { FontFamilyExt };
