import { mockCalendars } from "../../../Calendar/const";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../../providers/ThemeProvider";
import { Card, Typography } from "@mui/material";
import baseStyles from '../../dashboard.module.scss'
import styles from "./calendar_card.module.scss";
import { useCalendarEvents } from "../../../../hooks/useCalendarEvents";
import CalendarEventModal from "../../../../components/Modals/CalendarEventModal/CalendarEventModal";
import type { CalendarEvent } from "../../../../Interfaces/ICalendarEvent";
import { AddButton } from "../../../../components/Widgets/Buttons/AddButton";
import { FormatToScheduleXDate } from "../../../../components/Helpers/FormatToScheduleXDate";

function CalendarCard() {
    const { theme } = useContext(ThemeContext);
    const { data: calendarEvents } = useCalendarEvents();
    const today = new Date();
    const todayEvents = calendarEvents?.filter(event => {
        const eventDate = new Date(event.start);
        return eventDate.getDate() === today.getDate() && eventDate.getMonth() === today.getMonth() && eventDate.getFullYear() === today.getFullYear();
    });
    const [openEventModal, setOpenEventModal] = useState(false);
    const emptyCalendarEvent: CalendarEvent = {
        id: '',
        title: '',
        start: FormatToScheduleXDate(new Date()),
        end: FormatToScheduleXDate(new Date(new Date().getTime() + 60 * 60 * 1000)), // +1 hour
        calendarId: 'personal',
        people: []
    };

    return (
        <Card className={baseStyles.dashboard_card} elevation={6} sx={{ flex: ".5 !important", height: "300px", position: "relative" }}>
            <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
                Calendar:
            </Typography>
            <AddButton onClick={() => setOpenEventModal(true)} title="" variant="outlined" customClassName={styles.addButton} />
            {todayEvents?.length === 0 &&
                <div className={styles.noEvents}>
                    <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
                        No Events Today!
                    </Typography>
                </div>
            }
            <div className={styles.calendarEventsContainer}>
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
            </div>
            <CalendarEventModal
                isOpen={openEventModal}
                onClose={() => setOpenEventModal(false)}
                modalTitle="Add Calendar Event"
                isEditing={false}
                initialEvent={emptyCalendarEvent}
            />
        </Card>
    )
}

export default CalendarCard
