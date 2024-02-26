
export const monthIndexes: { [key: string]: number } = {
    'jan': 0,
    'feb': 1,
    'mar': 2,
    'apr': 3,
    'may': 4,
    'jun': 5,
    'jul': 6,
    'aug': 7,
    'sep': 8,
    'oct': 9,
    'nov': 10,
    'dec': 11,
}

export function parseDate(dateStr: string): Date {
    const dateParts = dateStr.split(', ');
    const year = Number.parseInt(dateParts[1]);
    let dayParts = dateParts[0].split(' ');
    const monthPrf: string = dayParts[0].substring(0, 3);
    const month = monthIndexes[monthPrf.toLowerCase()];
    const day = Number.parseInt(dayParts[1]);
    let date = new Date(year || new Date().getFullYear(), month, day);
    // When no hours are provided, the Date constructor uses "midnight in the local time zone".
    // Bank websites often lack exact timestamps, providing only [day, month, year].
    // If scraped from different locations (e.g., Canada and UK), the resulting timestamps differ.
    // Canada's timestamp has midnight Central Time (6:00 UTC), while UK's has midnight GMT (0:00 UTC).
    // Consequently, Firefly's hash function produces distinct results, leading to duplicate transactions.
    // TODO[Base]: Allow the user to choose their own "home UTC offset"
    date.setUTCHours(6);
    return date;
}