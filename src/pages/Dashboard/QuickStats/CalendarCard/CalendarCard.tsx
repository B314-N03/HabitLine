import { mockCalendars } from "../../../Calendar/const";
import { useContext } from "react";
import { ThemeContext } from "../../../../providers/ThemeProvider";
import { Card, Typography } from "@mui/material";
import baseStyles from '../../dashboard.module.scss'
import styles from "./calendar_card.module.scss";
import { useCalendarEvents } from "../../../../hooks/useCalendarEvents";
function CalendarCard() {
    const { theme } = useContext(ThemeContext);
    const { data: calendarEvents } = useCalendarEvents();
    const today = new Date();
    const todayEvents = calendarEvents?.filter(event => {
        const eventDate = new Date(event.start);
        return eventDate.getDate() === today.getDate() && eventDate.getMonth() === today.getMonth() && eventDate.getFullYear() === today.getFullYear();
    });

    return (
        <Card className={baseStyles.dashboard_card} elevation={6} sx={{ flex: ".5 !important", height: "300px" }}>
            <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
                Calendar:
            </Typography>
            {todayEvents?.length === 0 &&
                <div className={styles.noEvents}>
                    <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
                        No Events Today!
                    </Typography>
                </div>
            }
            {todayEvents?.map((calendarEvent) => {
                const calendarId = (calendarEvent.calendarId ?? 'personal') as keyof typeof mockCalendars;
                return (
                    <Card key={calendarEvent.id} className={styles.calendarEvent} sx={{ backgroundColor: mockCalendars[calendarId][`${theme}Colors`].main }}>
                        <h3>{calendarEvent.title}</h3>
                        <p>{new Date(calendarEvent.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(calendarEvent.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                        <p>People: {calendarEvent.people?.join(', ') || 'None'}</p>
                    </Card>
                );
            })}
        </Card>
    )
}

export default CalendarCard
