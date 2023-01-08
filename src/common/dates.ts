
const monthIndexes: { [key: string]: number } = {
    'Jan': 0,
    'Feb': 1,
    'Mar': 2,
    'Apr': 3,
    'May': 4,
    'Jun': 5,
    'Jul': 6,
    'Aug': 7,
    'Sep': 8,
    'Oct': 9,
    'Nov': 10,
    'Dec': 11,
}

export function parseDate(dateStr: string): Date {
    const dateParts = dateStr.split(', ');
    const year = Number.parseInt(dateParts[1]);
    let dayParts = dateParts[0].split(' ');
    const monthPrf: string = dayParts[0].substring(0, 3);
    const month = monthIndexes[monthPrf];
    const day = Number.parseInt(dayParts[1]);
    return new Date(year || new Date().getFullYear(), month, day);
}