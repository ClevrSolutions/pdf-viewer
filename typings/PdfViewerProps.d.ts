/**
 * This file was generated from PdfViewer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface PdfViewerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    guidAttribute: EditableValue<string>;
    changeDateAttribute: EditableValue<Date>;
    height: number;
}

export interface PdfViewerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    guidAttribute: string;
    changeDateAttribute: string;
    height: number | null;
}
