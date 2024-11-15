import { Node } from "@tiptap/core";
interface SetMathProps {
    tex: string;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        math: {
            setHbMath: (data: SetMathProps) => ReturnType;
        };
    }
}
export declare function useMath(): Node<any, any>;
export {};
