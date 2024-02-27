export const debugAutoRun = false;
export const bankDomain = 'royalbank.com';
export const autoRunStartURL = 'https://secure.royalbank.com/statics/login-service-ui/index#/full/signin';
export const extensionPrimaryColorHex = 'fedf01';
export const extensionSecondaryColorHex = '0051a5';
export const isSingleAccountBank = true;
export const extensionBankName = `Royal Bank Canada (RBC)`;
export const hubExtensionId = 'kcghjdbnjdaabfigmmjgmgiaehjidpoh';
export const transactionsPerPage: number | undefined = undefined;
// If set to "true", transactions on the remote server and the local browser
// will be considered "equal" if their amount and description are the same
// and their timestamps are within 24 hours of each other. If set to "false",
// the timestamps must be equal on both sides.
export const allowFuzzyDates = true;