import {applyStylingAndAddButtonForLocalOnlyRow, applyStylingToFoundRow, buildRowForRemoteOnlyTx} from "./custom";
import {
    TransactionRead,
    TransactionSplitStore,
    TransactionStore,
    TransactionTypeProperty
} from "firefly-iii-typescript-sdk-fetch";

export interface MetaTx {
    tx: {
        date: Date, description: string, amount: string, remoteId?: string,
    },
    txRow?: HTMLElement
    prevRow?: HTMLElement,
    nextRow?: HTMLElement,
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
    const btn = document.createElement('button');
    btn.addEventListener('click', syncToRemote);
    btn.innerText = 'Delete from Firefly III';
    if (prevRow) {
        const el = buildRowForRemoteOnlyTx(defaultBgCss, tx, btn);
        prevRow?.parentElement?.append(el);
    } else {
        const el = buildRowForRemoteOnlyTx(defaultBgCss, tx, btn);
        nextRow?.parentElement?.prepend(el);
    }
}

export class FireflyTransactionUIAdder {
    private synced: MetaTx[] = [];
    private remoteOnly: MetaTx[] = [];
    private localOnly: MetaTx[] = [];

    constructor(
        private readonly accountNo: string,
    ) {
    }

    registerSynced(tx: MetaTx): void {
        this.synced = [...this.synced, tx];
    }

    registerRemoteOnly(tx: MetaTx): void {
        this.remoteOnly = [...this.remoteOnly, tx];
    }

    registerLocalOnly(tx: MetaTx): void {
        this.localOnly = [...this.localOnly, tx];
    }

    registerDuplicates(metaTx: MetaTx, transactionSplits: TransactionRead[]) {
        let map = transactionSplits.map(
            v => ({
                ...metaTx, tx: {
                    ...v.attributes.transactions[0], remoteId: v.id,
                }
            })
        );
        this.remoteOnly = [...this.remoteOnly, ...map];
    }

    processAll() {
        const param = {
            bgCssForRemoteOnly: 'rgba(255, 152, 0, 255)',
            bgCssForDuplicates: 'rgba(244, 67, 54, 255)',
        };
        this.synced.forEach(
            row => applyStylingToFoundRow(row.txRow!, 'rgba(230, 230, 255, 255)'),
        );
        this.localOnly.forEach(
            row => applyStylingAndAddButtonForLocalOnlyRow(
                row.txRow!, () => this.storeTx(row)
            ),
        );
        this.remoteOnly.forEach(row => createRowWithButtonForRemoteOnlyTx(
                row.tx,
                () => this.deleteFromRemote(row.tx.remoteId!),
                'rgba(255, 220, 168, 255)',
                row.prevRow, row.nextRow
            ),
        )
    }

    private storeTx(row: MetaTx) {
        let tType = TransactionTypeProperty.Deposit;
        let srcId: string | undefined = undefined;
        let destId: string | undefined = this.accountNo;
        if (parseInt(row.tx.amount) < 0) {
            tType = TransactionTypeProperty.Withdrawal;
            srcId = this.accountNo;
            destId = undefined;
        }
        chrome.runtime.sendMessage({
                action: "store_transactions",
                is_auto_run: false,
                value: [{
                    applyRules: true,
                    errorIfDuplicateHash: true,
                    transactions: [{
                        amount: row.tx.amount,
                        description: row.tx.description,
                        date: row.tx.date,
                        type: tType,
                        sourceId: srcId,
                        destinationId: destId,
                    } as TransactionSplitStore]
                } as TransactionStore],
            },
            () => {
            });
    }

    private deleteFromRemote(remoteId: string) {
        //FIXME: Implement
    }
}
