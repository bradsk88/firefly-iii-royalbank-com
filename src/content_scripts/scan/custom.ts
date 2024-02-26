export function applyStylingToFoundRow(
    row: HTMLElement, defaultBgCss: string,
): void {
    // This updates the row element to indicate that the data was successfully
    // found on both the local page and the remote server.
    // TODO: Update the styles/layout if necessary
    row.style.background = defaultBgCss;
}

export function applyStylingAndAddButtonForLocalOnlyRow(
    row: HTMLElement, syncToRemote: () => void,
): void {
    // This updates the row element to indicate that the data was only found on
    // the local page and is missing from the remote server. It also adds a
    // button to sync the data to the remote server.
    // TODO: Update the styles/layout if necessary
    let node = document.createElement("button");
    node.innerText = 'Sync to Firefly III';
    node.onclick = syncToRemote;
    node.classList.add("added-by-firefly-iii-scan");
    row.appendChild(node);
}

export function buildRowForRemoteOnlyTx(defaultBgCss: string, tx: {
    date: Date;
    description: string;
    amount: string
}, btnFn: (removeElementOnSuccess: HTMLElement) => HTMLButtonElement): HTMLElement {
    // TODO: Build a row that will be inserted into the page so the user can
    //  see transactions that only exist on the remote server - this allows
    //  users to correct data that was mis-scraped or added accidentally.
    const el = document.createElement("div");
    el.style.background = defaultBgCss;
    el.innerText = `An unexpected transaction was found on the server: ${tx.amount} on ${tx.date}`;
    el.append(btnFn(el));
    el.classList.add("added-by-firefly-iii-scan");
    return el;
}
