import {AccountRead} from "firefly-iii-typescript-sdk-fetch/dist/models/AccountRead";
import {
    AccountsApi,
    Configuration,
    TransactionArray,
    TransactionsApi,
    TransactionStore
} from "firefly-iii-typescript-sdk-fetch";
import {AccountArray, AccountStore} from "firefly-iii-typescript-sdk-fetch/dist/models";
import {TransactionSplit} from "firefly-iii-typescript-sdk-fetch/dist/models/TransactionSplit";

export interface OpeningBalance {
    accountNumber: string;
    accountName: string;
    balance: number;
    date: Date;
}

export async function doListAccounts(
    token: string,
    baseURL: string,
): Promise<AccountRead[]> {
    let api = new AccountsApi(
        new Configuration({
            basePath: baseURL,
            accessToken: `Bearer ${token}`,
            headers: {
                "Content-Type": "application/json",
                "accept": "application/vnd.api+json",
            },
            fetchApi: self.fetch.bind(self),
        }),
    );
    return api.listAccount({
        // BASE: Handle lots of accounts (multiple pages)
    }).then(
        async (arr: AccountArray) => {
            let results = arr.data;
            if ((arr.meta.pagination?.total || 0) > results.length) {
                // BASE: Handle lots of accounts (multiple pages)
                const results2 = await api.listAccount({page: 2})
                results = results.concat(results2.data);
            }
            return results;
        },
    );
}

export async function doListTxs(
    accountId: string,
    token: string,
    baseURL: string,
): Promise<TransactionSplit[]> {
    let api = new AccountsApi(
        new Configuration({
            basePath: baseURL,
            accessToken: `Bearer ${token}`,
            headers: {
                "Content-Type": "application/json",
                "accept": "application/vnd.api+json",
            },
            fetchApi: self.fetch.bind(self),
        }),
    );
    return api.listTransactionByAccount({
        id: accountId,
    }).then(
        async (arr: TransactionArray) => {
            let results = arr.data;
            // BASE: Pull more pages?
            return results.map(v => v.attributes.transactions[0]);
        },
    );
}

export function doStoreOpeningBalance(
    token: string,
    baseURL: string,
    data: OpeningBalance
) {
    let api = new AccountsApi(
        new Configuration({
            basePath: baseURL,
            accessToken: `Bearer ${token}`,
            headers: {
                "Content-Type": "application/json",
                "accept": "application/vnd.api+json",
            },
            fetchApi: self.fetch.bind(self),
        }),
    );
    api.updateAccount({
        id: data.accountNumber,
        accountUpdate: {
            name: data.accountName,
            openingBalance: `${data.balance}`,
            openingBalanceDate: data.date,
        }
    })
}

export function doStoreTransactions(
    token: string,
    baseURL: string,
    data: TransactionStore[],
) {
    let api = new TransactionsApi(
        new Configuration({
            basePath: baseURL,
            accessToken: `Bearer ${token}`,
            headers: {
                "Content-Type": "application/json",
                "accept": "application/vnd.api+json",
            },
            fetchApi: self.fetch.bind(self),
        }),
    );
    console.log('storing txs', data);
    data.forEach(txStore => api.storeTransaction({
        transactionStore: txStore,
    }));
}

export function doStoreAccounts(
    token: string,
    baseURL: string,
    data: AccountStore[],
) {
    let api = new AccountsApi(
        new Configuration({
            basePath: baseURL,
            accessToken: `Bearer ${token}`,
            headers: {
                "Content-Type": "application/json",
                "accept": "application/vnd.api+json",
            },
            fetchApi: self.fetch.bind(self),
        }),
    );
    // api.listAccount({}).then((r: any) => backgroundLog(JSON.stringify(r)));
    data.forEach(accountStore => api.storeAccount({accountStore: accountStore}));
}