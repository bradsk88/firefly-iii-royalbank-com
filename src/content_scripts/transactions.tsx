import {AccountStore} from "firefly-iii-typescript-sdk-fetch/dist/models";
import {TransactionStore} from "firefly-iii-typescript-sdk-fetch";

// TODO: You will need to update manifest.json so this file will be loaded on
//  the correct URL.

function scrapeTransactionsFromPage(): TransactionStore[] {
    // TODO: This is where you implement the scraper to pull the individual
    //  transactions from the page
    return [];
}

window.addEventListener("load",function(event) {
    const button = document.createElement("button");
    button.textContent = "Export Opening Balance"
    button.addEventListener("click", () => {
        const transactions = scrapeTransactionsFromPage();
        chrome.runtime.sendMessage(
            {
                action: "store_transactions",
                value: transactions,
            },
            () => {}
        );
    }, false);

    // TODO: This is where you add a "scrape" button to the page where the
    //  account's transactions are listed.
    document.body.append(button);
});
