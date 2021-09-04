/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DataClassification } from "@components/modules/classification/module-classification";
export namespace Components {
    interface AppHome {
    }
    interface AppRoot {
    }
    interface F1ModuleClassification {
    }
    interface F1TableClassification {
        "data"?: DataClassification[];
        "tableTitle"?: string;
    }
    interface F1Websocket {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLF1ModuleClassificationElement extends Components.F1ModuleClassification, HTMLStencilElement {
    }
    var HTMLF1ModuleClassificationElement: {
        prototype: HTMLF1ModuleClassificationElement;
        new (): HTMLF1ModuleClassificationElement;
    };
    interface HTMLF1TableClassificationElement extends Components.F1TableClassification, HTMLStencilElement {
    }
    var HTMLF1TableClassificationElement: {
        prototype: HTMLF1TableClassificationElement;
        new (): HTMLF1TableClassificationElement;
    };
    interface HTMLF1WebsocketElement extends Components.F1Websocket, HTMLStencilElement {
    }
    var HTMLF1WebsocketElement: {
        prototype: HTMLF1WebsocketElement;
        new (): HTMLF1WebsocketElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-root": HTMLAppRootElement;
        "f1-module-classification": HTMLF1ModuleClassificationElement;
        "f1-table-classification": HTMLF1TableClassificationElement;
        "f1-websocket": HTMLF1WebsocketElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppRoot {
    }
    interface F1ModuleClassification {
    }
    interface F1TableClassification {
        "data"?: DataClassification[];
        "tableTitle"?: string;
    }
    interface F1Websocket {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-root": AppRoot;
        "f1-module-classification": F1ModuleClassification;
        "f1-table-classification": F1TableClassification;
        "f1-websocket": F1Websocket;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "f1-module-classification": LocalJSX.F1ModuleClassification & JSXBase.HTMLAttributes<HTMLF1ModuleClassificationElement>;
            "f1-table-classification": LocalJSX.F1TableClassification & JSXBase.HTMLAttributes<HTMLF1TableClassificationElement>;
            "f1-websocket": LocalJSX.F1Websocket & JSXBase.HTMLAttributes<HTMLF1WebsocketElement>;
        }
    }
}
