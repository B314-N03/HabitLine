import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
    createViewDay,
    createViewMonthAgenda,
    createViewMonthGrid,
    createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import '@schedule-x/theme-default/dist/index.css'
import { useContext, useEffect, useState } from 'react'
import { MainWrapper } from '../../components/Helpers/Wrappers/MainWrapper/MainWrapper'
import { ThemeContext } from '../../providers/ThemeProvider'
import EventModal from '../../components/Modals/EventModal/EventModal'
import type { CalendarEvent } from '../../Interfaces/ICalendarEvent'
import { mockCalendarEvents, mockCalendars } from './const'
import { Button, Typography } from '@mui/material'
import styles from './calendar.module.scss'
import { AddButton } from '../../components/Widgets/Buttons/AddButton'
function Calendar() {
    const eventsService = useState(() => createEventsServicePlugin())[0]
    const [openEventModal, setOpenEventModal] = useState(false)
    const [modalTitle, setModalTitle] = useState('Add Event')
    const [eventToView, setEventToView] = useState<CalendarEvent | null>(null)
    const { theme } = useContext(ThemeContext)
    const [events, setEvents] = useState(mockCalendarEvents)

    const calendar = useCalendarApp({
        callbacks: {
            onDoubleClickEvent: (event) => {
                setOpenEventModal(true)
                setModalTitle('Edit Event')
                setEventToView(event as CalendarEvent)
            },
            onClickDateTime: (dateTime) => {
                // Parse manually to avoid timezone shifts
                const [datePart, timePart] = dateTime.split(' ');
                const [year, month, day] = datePart.split('-').map(Number);
                const [hour, minute] = timePart.split(':').map(Number);

                const endTime = new Date(year, month - 1, day, hour + 1, minute); // +1 hour here

                const pad = (n: number) => n.toString().padStart(2, '0');
                const endTimeStr = `${endTime.getFullYear()}-${pad(endTime.getMonth() + 1)}-${pad(endTime.getDate())} ${pad(endTime.getHours())}:${pad(endTime.getMinutes())}`;

                setOpenEventModal(true);
                setModalTitle('Add Event');
                setEventToView({
                    title: '',
                    start: dateTime,
                    end: endTimeStr,
                    calendarId: 'work',
                    id: '',
                });
            }

        },
        views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
        events: events,
        plugins: [eventsService, createDragAndDropPlugin(), createEventModalPlugin()],
        isDark: theme === 'dark',
        dayBoundaries: {
            start: '06:00',
            end: '18:00',
        },
        calendars: mockCalendars,


    })

    useEffect(() => {
        eventsService.getAll()
        calendar?.setTheme(theme === 'dark' ? 'dark' : 'light')
    }, [theme, eventsService])

    return (
        <MainWrapper>
            <div className={styles.calendarPageHeader}>
                <Typography variant="h4" component="h1" style={{ width: "fit-content" }}>Calendar</Typography>
                <AddButton
                    variant="contained"
                    title='Add Event'
                    size="large"
                    onClick={() => {
                        const date = new Date();
                        const startTime = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
                        const endTime = new Date(date.getTime() + 60 * 60 * 1000); // +1 hour
                        const endTimeStr = `${endTime.getFullYear()}-${(endTime.getMonth() + 1).toString().padStart(2, '0')}-${endTime.getDate().toString().padStart(2, '0')} ${endTime.getHours().toString().padStart(2, '0')}:${endTime.getMinutes().toString().padStart(2, '0')}`;
                        setOpenEventModal(true)
                        setModalTitle('Add Event')
                        setEventToView({
                            title: '',
                            start: startTime,
                            end: endTimeStr,
                            calendarId: 'work',
                            id: '',
                        })
                    }}
                />
            </div>
            <ScheduleXCalendar calendarApp={calendar} />
            <EventModal
                isOpen={openEventModal}
                onClose={() => {
                    setOpenEventModal(false)
                }}
                modalTitle={modalTitle}
                onSave={(event) => {
                    console.log('Event saved:', event)
                }}
                isEditing={false}
                initialEvent={eventToView || {
                    title: '',
                    start: '',
                    end: '',
                    calendarId: 'work',
                    id: '',
                }}
            // initialEvent={calendar?.eventModal.initialEvent}
            />
        </MainWrapper>
    )
}

export default Calendar