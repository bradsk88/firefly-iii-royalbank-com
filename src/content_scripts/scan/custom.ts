export function applyStylingToFoundRow(
    row: HTMLElement, defaultBgCss: string,
): void {
    // This updates the row element to indicate that the data was successfully
    // found on both the local page and the remote server.
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
    node.style.margin = "0 auto";
    node.style.display = "block";
    node.style.height = "100%";
    node.style.width = "100%";
    node.classList.add("added-by-firefly-iii-scan");

    let container: HTMLElement = row.querySelector('td:nth-last-child(2)')!;
    container.style.height = "40px"; // Seems this can be any value
    container.style.padding = "8px";
    container.append(node);
}

export function buildRowForRemoteOnlyTx(defaultBgCss: string, tx: {
    date: Date;
    description: string;
    amount: string
}, btnFn: (removeElementOnSuccess: HTMLElement) => HTMLButtonElement): HTMLElement {
    // TODO: Build a row that will be inserted into the page so the user can
    //  see transactions that only exist on the remote server - this allows
    //  users to correct data that was mis-scraped or added accidentally.
    const el = document.createElement("tr");
    el.style.background = defaultBgCss;
    el.classList.add('rbc-transaction-list-transaction-new','row-clickable')
    const date = document.createElement("td");
    date.classList.add("date-column-padding")
    date.innerText = `${new Date(tx.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}`;
    const desc = document.createElement("td");
    desc.innerHTML = `${tx.description}<br/><em>Found on server-side only</em>`;
    const amount = document.createElement("td");
    amount.innerText = `$${parseFloat(tx.amount).toFixed(2)}`;
    amount.classList.add('rbc-transaction-list-withdraw');

    const btn = btnFn(el);
    btn.style.margin = "0 auto";
    btn.style.display = "block";
    btn.style.height = "100%";
    btn.style.width = "100%";

    const btnCol = document.createElement("td");
    btnCol.style.height = "40px"; // Seems this can be any value
    btnCol.style.padding = "8px";

    btnCol.append(btn);
    el.append(date, desc, amount, btnCol, document.createElement('td'));
    el.classList.add("added-by-firefly-iii-scan");
    return el;
}
