
import type { CalendarEventExternal } from "@schedule-x/calendar";
export const mockCalendarEvents: CalendarEventExternal[] = [
    {
        id: '1',
        title: 'Meeting with Team',
        start: '2025-08-08 08:30',
        end: '2025-08-08 12:00',
        calendarId: 'work',
        people: ['Alice', 'Bob'],
    },
    {
        id: '2',
        title: 'Doctor Appointment',
        start: '2025-08-09 14:00',
        end: '2025-08-09 15:00',
        calendarId: 'personal',
        people: ['Charlie'],
    },
    {
        id: '3',
        title: 'Project Deadline',
        start: '2025-08-05 09:00',
        end: '2025-08-05 17:00',
        calendarId: 'work',
        people: ['Alice', 'David'],
    },
    {
        id: '4',
        title: 'Family Gathering',
        start: '2025-08-04 12:00',
        end: '2025-08-04 16:00',
        calendarId: 'personal',
        people: ['Eve', 'Frank'],
    },
    {
        id: '5',
        title: 'Standup Meeting',
        start: '2025-08-04 08:00',
        end: '2025-08-04 08:30',
        calendarId: 'work',
        people: ['Alice', 'Bob', 'Charlie'],
    },
    {
        id: '6',
        title: 'Standup Meeting',
        start: '2025-08-05 08:00',
        end: '2025-08-05 08:30',
        calendarId: 'work',
        people: ['Alice', 'Bob', 'Charlie'],
    },
    {
        id: '7',
        title: 'Standup Meeting',
        start: '2025-08-06 08:00',
        end: '2025-08-06 08:30',
        calendarId: 'work',
        people: ['Alice', 'Bob', 'Charlie'],
    },
    {
        id: '8',
        title: 'Standup Meeting',
        start: '2025-08-07 08:00',
        end: '2025-08-07 08:30',
        calendarId: 'work',
        people: ['Alice', 'Bob', 'Charlie'],
    },
    {
        id: '9',
        title: 'Standup Meeting',
        start: '2025-08-08 08:00',
        end: '2025-08-08 08:30',
        calendarId: 'work',
        people: ['Alice', 'Bob', 'Charlie'],
    },

    {
        id: '10',
        title: 'Gym Session',
        start: '2025-08-10 07:00',
        end: '2025-08-10 08:00',
        calendarId: 'sports',
        people: ['Alice'],
    },
    {
        id: '11',
        title: 'Birthday Party',
        start: '2025-08-11 18:00',
        end: '2025-08-11 21:00',
        calendarId: 'personal',
        people: ['Alice', 'Bob', 'Charlie'],
    },
];

export const mockCalendars = {
    personal: {
        colorName: 'personal',
        lightColors: {
            main: '#f9d71c',
            container: '#fff5aa',
            onContainer: '#594800',
        },
        darkColors: {
            main: '#fff5c0',
            onContainer: '#fff5de',
            container: '#a29742',
        },
    },
    work: {
        colorName: 'work',
        lightColors: {
            main: '#f91c45',
            container: '#ffd2dc',
            onContainer: '#59000d',
        },
        darkColors: {
            main: '#ffc0cc',
            onContainer: '#ffdee6',
            container: '#a24258',
        },
    },
    sports: {
        colorName: 'sports',
        lightColors: {
            main: '#1cf9b0',
            container: '#dafff0',
            onContainer: '#004d3d',
        },
        darkColors: {
            main: '#c0fff5',
            onContainer: '#e6fff5',
            container: '#42a297',
        },
    },
}
