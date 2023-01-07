import React from "react";
import { createRoot } from "react-dom/client";
import Initialize from "./components/Initialize";

window.addEventListener("load",function(event) {
    const button = document.createElement("button");
    button.textContent = "Example Button"
    button.addEventListener("click", () => {
        console.log('sent')
        chrome.runtime.sendMessage(
            {
                action: "store_transactions",
            },
            () => {}
        );
    }, false);
  document.body.append(button);
});
