

export const FormatToScheduleXDate = (date: Date): string => {
    const pad = (num: number) => num.toString().padStart(2, '0');

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    // example format: "2023-10-05 14:30"
    // returns a string in the format YYYY-MM-DD HH:MM
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}
