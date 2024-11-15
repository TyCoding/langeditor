export type UploadFunction = (file: File, updateProgress: (percent: number) => void) => Promise<string>;
export interface UploadInfo {
    file: File;
    pos: number;
}
