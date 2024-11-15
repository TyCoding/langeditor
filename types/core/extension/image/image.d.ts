export type Display = "block" | "inline" | "left" | "right";
export interface ImageAttrsOptions {
    /** The source URL of the image. */
    src?: string;
    /** The alternative text for the image. */
    alt?: string;
    /** The title of the image. */
    title?: string;
    /** Indicates whether the aspect ratio of the image should be locked. */
    keepRatio?: boolean;
    /** The width of the image. */
    width?: number | string | null;
    /** The height of the image. */
    height?: number | string | null;
    /** The display style of the image. */
    display?: Display;
}
export interface SetImageAttrsOptions extends ImageAttrsOptions {
    /** The source URL of the image. */
    src: string;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        imageResize: {
            /**
             * Add an image
             */
            setImage: (options: Partial<SetImageAttrsOptions>) => ReturnType;
            /**
             * Update an image
             */
            updateImage: (options: Partial<SetImageAttrsOptions>) => ReturnType;
        };
    }
}
export declare function useImage(): import("@tiptap/vue-3").Node<import("@tiptap/extension-image").ImageOptions, any>;
