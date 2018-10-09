import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);

if ((module as any).hot) {
  (module as any).hot.accept();
}

registerServiceWorker();
