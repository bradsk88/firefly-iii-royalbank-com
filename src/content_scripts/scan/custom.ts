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
    row.appendChild(node);
}

export function createRowWithButtonForRemoteOnlyTx(
    tx: {
        date: Date, description: string, amount: string,
    },
    syncToRemote: () => void,
    prevRow?: HTMLElement,
    nextRow?: HTMLElement,
) {
    // This adds a new row element to indicate that the data was only found on
    // the remote server and is missing from the local page. It also adds a
    // button to delete the data to the remote server.
    // TODO: Update the styles/layout if necessary
    let node = document.createElement("button");
    node.innerText = 'Delete from Firefly III';
    node.onclick = syncToRemote;
    if (prevRow) {
        // FIXME: Create fake rows
        // FIXME: Why are there so many of these?
        const copy = prevRow.cloneNode(true) as HTMLElement;
        copy.textContent = tx.description;
        copy.append(node);
        prevRow.append(copy);
    } else {
        nextRow?.prepend(node);
    }
}