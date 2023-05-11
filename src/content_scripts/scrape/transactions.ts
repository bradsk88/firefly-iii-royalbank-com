import {AccountRead} from "firefly-iii-typescript-sdk-fetch/dist/models/AccountRead";
import {parseDate} from "../../common/dates";
import {priceFromString} from "../../common/prices";

export function getButtonDestination(): Element {
    return document.querySelector("h1.product-name")!;
}

/**
 * @param accounts The first page of account in your Firefly III instance
 */
export async function getCurrentPageAccount(
    accounts: AccountRead[],
): Promise<AccountRead> {
    const accountNumber = document.querySelector("span.account-selected")!.textContent!.split('(')[1].split(')')[0];
    return accounts.find(
        acct => acct.attributes.accountNumber === accountNumber,
    )!;
}

export function isPageReadyForScraping(): boolean {
    return true;
}

export function getRowElements(): Element[] {
    return Array.from(document.querySelectorAll(
        "tr.rbc-transaction-list-transaction-new"
    ).values());
}

export function getRowDate(el: Element): Date {
    const date = el.childNodes[0];
    return parseDate(date!.textContent!.trim());
}

function isRowLoading(r: Element): boolean {
    return false;
}

export function getRowAmount(r: Element, pageAccount: AccountRead): number {
    if (isRowLoading(r)) {
        throw new Error("Page is not ready for scraping")
    }
    const debitDiv = r.childNodes[2];
    const creditDiv = r.childNodes[5];
    if (debitDiv!.textContent) {
        return -priceFromString(debitDiv!.textContent!);
    }
    return -priceFromString(creditDiv!.textContent!);
}

export function getRowDesc(r: Element): string {
    return r.childNodes[1]!.textContent!.trim()!
}

export function findBackToAccountsPageButton(): HTMLElement {
    const navButtons = Array.from(document.querySelectorAll("div.nav-container a"));
    return navButtons.filter(v => v.textContent?.trim() === "My Accounts")[0]! as HTMLElement;
}
