declare const _default: import("vue").DefineComponent<{}, {
    deleteNode: () => void;
    updateAttributes: (attributes: Record<string, any>) => void;
    editor: import("@tiptap/core").Editor;
    node: import("@tiptap/pm/model").Node;
    decorations: readonly import("@tiptap/vue-3").DecorationWithType[];
    selected: boolean;
    extension: import("@tiptap/vue-3").Node<any, any>;
    getPos: () => number;
    $props: {
        readonly deleteNode?: (() => void) | undefined;
        readonly updateAttributes?: ((attributes: Record<string, any>) => void) | undefined;
        readonly editor?: import("@tiptap/core").Editor | undefined;
        readonly node?: import("@tiptap/pm/model").Node | undefined;
        readonly decorations?: readonly import("@tiptap/vue-3").DecorationWithType[] | undefined;
        readonly selected?: boolean | undefined;
        readonly extension?: import("@tiptap/vue-3").Node<any, any> | undefined;
        readonly getPos?: (() => number) | undefined;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
