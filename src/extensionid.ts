// TODO: Update all the values in this file, as appropriate.

// debugAutoRun can be used to slow down the auto-run process for
// the purpose of debugging it. It will stop after scraping each
// account and pause for the developer to manually navigate to the
// next account.
export const debugAutoRun = false;
// bankDomain is used granting this scraper run-time permission
// to access the bank website. This is done to respect the user's
// privacy by only requesting the minimal permissions.
export const bankDomain = 'royalbank.com';
// autoRunStartURL is the URL that will be opened in a new tab when
// the auto run procedure is started for this scraper.
// IMPORTANT: It should contain the value from "bankDomain" or the
// auto-run might not function as expected.
export const autoRunStartURL = 'https://example.com';
// extensionPrimaryColorHex and extensionSecondaryColorHex are used
// for making it easier to visually locate this specific bank in
// the Firefly III Hub extension. When using the default "flaming
// pig" logo, primary is the color of the pig and secondary is the
// color of the flame.
export const extensionPrimaryColorHex = 'FFFFFF';
export const extensionSecondaryColorHex = '000000';
// By default, this chrome extension will attempt to find an
// "index page" of accounts on the bank website and then click
// into each account to scrape transactions. Some banks site
// (e.g. for credit cards) do not have an account index, and
// instead will just list all transactions after the user logs
// in. For such index-less banks, set isSingleAccountBank true.
export const isSingleAccountBank = false;
// extensionBankName is used when creating accounts on Firefly III.
export const extensionBankName = `Untitled [${chrome.runtime.id}]`;
// This is the of the "Firefly III Hub" Chrome Extension.
// When in doubt, leave this as kcghjdbnjdaabfigmmjgmgiaehjidpoh.
export const hubExtensionId = 'kcghjdbnjdaabfigmmjgmgiaehjidpoh';
// If the bank website imposes a limit on the number of transactions
// shown on the page, specify that number here. This is used for
// performance improvement by limiting the amount of data being
// loaded into memory. When in doubt, leave this undefined.
export const transactionsPerPage: number | undefined = undefined;
// allowFuzzyDates is used by the "scan transactions" function.
// If set to "true", transactions on the remote server and the local browser
// will be considered "equal" if their amount and description are the same
// and their timestamps are within 24 hours of each other. If set to "false",
// the timestamps must be equal on both sides.
export const allowFuzzyDates = true;