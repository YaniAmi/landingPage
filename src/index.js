import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import EntryPoint from "./EntryPoint";

import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EntryPoint />);

reportWebVitals();
serviceWorker.register({
  onUpdate: (registration) => {
    alert("New version available!  Ready to update?");
    window.location.reload();
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
      registration.waiting.addEventListener("statechange", (e) => {
        if (e.target.state === "activated") {
          window.location.reload();
        }
      });
    }
  },
});
