export interface CalendarEvent {
    id: string;
    title: string;
    start: string;
    end: string;
    calendarId: string;
    people?: string[];
}
