// Default entry point for client scripts
import * as ReactDOM from "react-dom";
import * as React from "react";
export const render = (type: any, element: HTMLElement) => {
    ReactDOM.render(React.createElement(type, {}), element);
};
// Automatically added for the connector
export * from "./connectorConfig";
