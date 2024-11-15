import type { App } from "vue";
export type Language = "zh-CN" | "en-US";
declare const i18n: import("vue-i18n").I18n<{
    "en-US": {
        redo: string;
        undo: string;
        formatClear: string;
        bold: string;
        italic: string;
        strike: string;
        underline: string;
        textColor: string;
        textLight: string;
        heading: string;
        align: string;
        alignLeft: string;
        alignCenter: string;
        alignRight: string;
        alignJustify: string;
        lineHeight: string;
        subscript: string;
        superscript: string;
        image: string;
        video: string;
        link: string;
        code: string;
        codeBlock: string;
        quote: string;
        separator: string;
        bulletList: string;
        orderList: string;
        taskList: string;
        fullscreen: string;
        table: string;
        math: string;
        print: string;
        outlineTree: string;
        codeView: string;
        fontFamily: string;
        askAi: string;
        exportPdf: string;
        exportWord: string;
        openLink: string;
        unsetLink: string;
        saveLink: string;
        insertLink: string;
        linkUrlTips: string;
        linkTextTips: string;
        insertTable: string;
        mergeCells: string;
        splitCells: string;
        addTopRow: string;
        addBottomRow: string;
        addLeftCell: string;
        addRightCell: string;
        delRow: string;
        delCol: string;
        delTable: string;
        uploadFile: string;
        imageUrlTips: string;
        uploadImageTips: string;
        uploadImage: string;
        networkImage: string;
        localImage: string;
        videoUrlTips: string;
        uploadVideoTips: string;
        uploadVideo: string;
        networkVideo: string;
        localVideo: string;
        leftFloat: string;
        rightFloat: string;
        inline: string;
        smallSize: string;
        mediumSize: string;
        fullSize: string;
        delete: string;
        displayVideo: string;
        loopPlay: string;
        soundOff: string;
        editing: string;
        preview: string;
        tocHeadTips: string;
        tocEndTips: string;
        placeholderCommand: string;
        wordCount: string;
    };
    "zh-CN": {
        redo: string;
        undo: string;
        formatClear: string;
        bold: string;
        italic: string;
        strike: string;
        underline: string;
        textColor: string;
        textLight: string;
        heading: string;
        align: string;
        alignLeft: string;
        alignCenter: string;
        alignRight: string;
        alignJustify: string;
        lineHeight: string;
        subscript: string;
        superscript: string;
        image: string;
        video: string;
        link: string;
        code: string;
        codeBlock: string;
        quote: string;
        separator: string;
        bulletList: string;
        orderList: string;
        taskList: string;
        fullscreen: string;
        table: string;
        math: string;
        print: string;
        outlineTree: string;
        codeView: string;
        fontFamily: string;
        askAi: string;
        exportPdf: string;
        exportWord: string;
        openLink: string;
        unsetLink: string;
        saveLink: string;
        insertLink: string;
        linkUrlTips: string;
        linkTextTips: string;
        insertTable: string;
        mergeCells: string;
        splitCells: string;
        addTopRow: string;
        addBottomRow: string;
        addLeftCell: string;
        addRightCell: string;
        delRow: string;
        delCol: string;
        delTable: string;
        uploadFile: string;
        imageUrlTips: string;
        uploadImageTips: string;
        uploadImage: string;
        networkImage: string;
        localImage: string;
        videoUrlTips: string;
        uploadVideoTips: string;
        uploadVideo: string;
        networkVideo: string;
        localVideo: string;
        leftFloat: string;
        rightFloat: string;
        inline: string;
        smallSize: string;
        mediumSize: string;
        fullSize: string;
        delete: string;
        displayVideo: string;
        loopPlay: string;
        soundOff: string;
        editing: string;
        preview: string;
        tocHeadTips: string;
        tocEndTips: string;
        placeholderCommand: string;
        wordCount: string;
    };
}, {}, {}, string, true>;
export declare const t: any;
export declare function setLocale(locale: Language): void;
export declare function setupI18n(app: App): void;
export default i18n;
