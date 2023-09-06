import { ReactElement, createElement } from "react";

import { PdfViewerContainerProps } from "../typings/PdfViewerProps";

import "./ui/PdfViewer.css";

export function PdfViewer(props: PdfViewerContainerProps): ReactElement {
    const fileUrl = `/file?guid=${props.guidAttribute.value}&changedDate=${props.changeDateAttribute.value}8&target=window`;
    return (
        <object data={fileUrl} type="application/pdf" className="widget-pdf-viewer" height={props.height}>
            <p>
                Unable to display PDF file. <a href={fileUrl}>Download</a> instead.
            </p>
        </object>
    );
}
