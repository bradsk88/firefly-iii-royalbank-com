import {TransactionStore} from "firefly-iii-typescript-sdk-fetch";
import {AccountRead} from "firefly-iii-typescript-sdk-fetch/dist/models/AccountRead";

export function getButtonDestination(): Element {
    // TODO: Find a DOM element on the page where the manual "export to firefly"
    //  button should go.
    return document.body;
}

/**
 * @param accounts The first page of account in your Firefly III instance
 */
export async function getCurrentPageAccount(
    accounts: AccountRead[],
): Promise<AccountRead> {
    // TODO: Find either the account number or account name on the page.
    const accountNumber = "<implement this>";
    // Use that to find the Firefly III account ID from the provided list.
    return accounts.find(
        acct => acct.attributes.accountNumber === accountNumber,
    )!;
}

/**
 * @param pageAccount The Firefly III account for the current page
 */
export function scrapeTransactionsFromPage(
    pageAccount: AccountRead,
): TransactionStore[] {
    // TODO: This is where you implement the scraper to pull the individual
    //  transactions from the page
    return [];
}