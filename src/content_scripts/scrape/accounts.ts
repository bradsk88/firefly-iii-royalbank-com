import {OpeningBalance} from "../../background/firefly_export";

export function getButtonDestination(): Element {
    return document.querySelector('#qpwMobileHeader')!;
}

export function isPageReadyForScraping(): boolean {
    return true;
}

export function getAccountElements(): Element[] {
    return [document.querySelector("ul.accounts-list")!];
}

export function shouldSkipScrape(accountElement: Element): boolean {
    return false;
}

export function getAccountNumber(
    accountElement: Element,
): string {
    let accountNumText = accountElement.querySelector(
        "span.accounts-table__account-number"
    )!.textContent!;
    return accountNumText.split("MasterCard")[1].trim().split(" ")[-1]
}

export function getAccountName(
    accountElement: Element,
): string {
    return accountElement.querySelector("a")!.textContent!.trim()
}

export function getOpeningBalance(
    accountElement: Element,
): OpeningBalance | undefined {
    return undefined;
}