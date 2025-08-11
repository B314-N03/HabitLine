import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react"
import { mockCalendarEvents, mockCalendars } from "../../../Calendar/const";
import { createViewDay } from "@schedule-x/calendar";
import { useContext } from "react";
import { ThemeContext } from "../../../../providers/ThemeProvider";
import { Card } from "@mui/material";
import baseStyles from '../../dashboard.module.scss'
function CalendarCard() {
    const { theme } = useContext(ThemeContext);
    const calendar = useCalendarApp({
        events: mockCalendarEvents,
        views: [createViewDay()],
        callbacks: {
            onClickDateTime: (dateTime) => {
                // Handle date click logic here
                console.log("Date clicked:", dateTime);
            }
        },
        dayBoundaries: {
            start: "08:00",
            end: "18:00",
        },
        calendars: mockCalendars,
        isDark: theme === 'dark',
        isResponsive: true,
        defaultView: 'day',

    });
    return (
        <Card className={baseStyles.dashboard_card} elevation={6} sx={{ flex: ".5 !important", height: "300px" }}>
            <ScheduleXCalendar calendarApp={calendar} />
        </Card>
    )
}

export default CalendarCard
