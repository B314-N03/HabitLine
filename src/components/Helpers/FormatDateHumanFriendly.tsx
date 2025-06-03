function formatDateHumanFriendly(dateInput: Date): string {
    const date = new Date(dateInput);
    const now = new Date();

    const isToday = date.toDateString() === now.toDateString();

    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();

    const timeString = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    if (isToday) {
        return `Today at ${timeString}`;
    } else if (isYesterday) {
        return `Yesterday at ${timeString}`;
    } else {
        return date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }) + ` at ${timeString}`;
    }
}

export default formatDateHumanFriendly