export function priceFromString(
    str: string,
): number {
    const stripped = str.replace('$', '').replace(',', '');
    return Number.parseFloat(stripped);
}