import { Node } from "@tiptap/core";
export type Display = "block" | "inline" | "left" | "right";
export type UploadFunction = (file: File, updateProgress: (percent: number) => void) => Promise<string>;
export interface VideoAttrsOptions {
    /** The source URL of the image. */
    src?: string;
    /** The alternative text for the image. */
    alt?: string;
    /** The title of the image. */
    title?: string;
    /** Indicates whether the aspect ratio of the image should be locked. */
    keepRatio?: boolean;
    controls?: boolean;
    loop?: boolean;
    muted?: boolean;
    /** The width of the image. */
    width?: number | string | null;
    /** The height of the image. */
    height?: number | string | null;
    /** The display style of the image. */
    display?: Display;
}
export interface SetVideoAttrsOptions extends VideoAttrsOptions {
    /** The source URL of the image. */
    src: string;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        videoResize: {
            /**
             * Add an image
             */
            setVideo: (options: Partial<SetVideoAttrsOptions>) => ReturnType;
            /**
             * Update an image
             */
            updateVideo: (options: Partial<SetVideoAttrsOptions>) => ReturnType;
        };
    }
}
export declare function useVideo(): Node<any, any>;
