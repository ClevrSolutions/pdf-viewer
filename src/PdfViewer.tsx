import { ReactElement, createElement } from "react";

import { PdfViewerContainerProps } from "../typings/PdfViewerProps";

import "./ui/PdfViewer.css";

export function PdfViewer(props: PdfViewerContainerProps): ReactElement {
    const fileUrl = `${props.file?.value?.uri}&target=window${props.urlOptions}`;
    return (
        <object data={fileUrl} type="application/pdf" className="widget-pdf-viewer" width="100%" height="100%">
            <p>
                Unable to display PDF file. <a href={fileUrl}>Download</a> instead.
            </p>
        </object>
    );
}
