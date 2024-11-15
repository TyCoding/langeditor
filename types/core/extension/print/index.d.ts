import PrintExt from "./Print.vue";
import { Extension } from "@tiptap/core";
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        print: {
            /**
             * print the editor content
             */
            print: () => ReturnType;
        };
    }
}
export declare function usePrint(): Extension<any, any>;
export { PrintExt };
