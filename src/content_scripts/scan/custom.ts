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
    defaultBgCss: string,
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
        const copy = prevRow.cloneNode(true) as HTMLElement;
        copy.textContent = tx.description;
        copy.append(node);
        prevRow.append(copy);
    } else {
        const el = document.createElement("article");
        el.style.background = defaultBgCss;
        const outer = document.createElement('div');
        outer.classList.add('grid', 'list-item');
        const inner = document.createElement('div');
        inner.classList.add('col-c-60');
        const date = document.createElement('div');
        date.classList.add('text-muted', 'text-uppercase');
        date.textContent = `${tx.date} (Found on server but not on bank site)`;
        const desc = document.createElement('span');
        desc.classList.add('text-highlight', 'text-bold');
        desc.textContent = `${tx.description}`;
        inner.append(date, desc);
        outer.append(inner);

        const inner2 = document.createElement('div');
        inner2.classList.add('col-c-40', 'text-right', 'truncate');

        const amount = document.createElement('div');
        amount.classList.add('text-bold');
        amount.innerText = `$${parseFloat(tx.amount).toFixed(2)}`;
        inner2.append(amount);

        const btn = document.createElement('button');
        btn.addEventListener('click', syncToRemote);
        btn.innerText = 'Delete';
        inner2.append(btn);

        outer.append(inner2);

        el.append(outer);
        nextRow?.parentElement?.prepend(el);
    }
}