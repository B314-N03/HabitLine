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
import type { CalendarEvent } from '../../Interfaces/ICalendarEvent'
import { Typography } from '@mui/material'
import styles from './calendar.module.scss'
import { AddButton } from '../../components/Widgets/Buttons/AddButton'
import { useCalendarEvents } from '../../hooks/useCalendarEvents'
import { useCalendarTypes } from '../../hooks/useCalendarTypes'
import CalendarEventModal from '../../components/Modals/CalendarEventModal/CalendarEventModal'
import { createCurrentTimePlugin } from '@schedule-x/current-time'
import { FormatToScheduleXDate } from '../../components/Helpers/FormatToScheduleXDate'
import SuccessSnackbar from '../../components/Widgets/Snackbars/SuccessSnackbar'


function Calendar() {
    const eventsService = useState(() => createEventsServicePlugin())[0]
    const [openEventModal, setOpenEventModal] = useState(false)
    const [modalTitle, setModalTitle] = useState('Add Event')
    const [eventToView, setEventToView] = useState<CalendarEvent | null>(null)
    const { theme } = useContext(ThemeContext)
    const { data: calendarEvents } = useCalendarEvents()
    const { data: calendars = {} } = useCalendarTypes()
    const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')
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
        events: calendarEvents,
        plugins: [eventsService, createDragAndDropPlugin(), createEventModalPlugin(), createCurrentTimePlugin()],
        isDark: theme === 'dark',
        dayBoundaries: {
            start: '06:00',
            end: '24:00',
        },
        calendars: calendars,


    })

    useEffect(() => {
        eventsService.getAll()
        calendar?.setTheme(theme === 'dark' ? 'dark' : 'light')
    }, [theme, eventsService, calendar])

    return (
        <MainWrapper>
            <div className={styles.calendarPageHeader}>
                <Typography variant="h4" component="h1" style={{ width: "fit-content" }}>Calendar</Typography>
                <AddButton
                    variant="contained"
                    title='Add Event'
                    size="large"
                    onClick={() => {
                        setOpenEventModal(true)
                        setModalTitle('Add Event')
                        setEventToView({
                            title: '',
                            start: FormatToScheduleXDate(new Date()),
                            end: FormatToScheduleXDate(new Date(new Date().getTime() + 60 * 60 * 1000)),
                            calendarId: 'work',
                            id: '',
                        })
                    }}
                />
            </div>
            <ScheduleXCalendar calendarApp={calendar} />
            <CalendarEventModal
                isOpen={openEventModal}
                onClose={() => {
                    setOpenEventModal(false)
                }}
                modalTitle={modalTitle}
                isEditing={!!eventToView?.id}
                initialEvent={eventToView || {
                    title: '',
                    start: '',
                    end: '',
                    calendarId: 'work',
                    id: '',
                }}
                setShowSuccessSnackbar={setShowSuccessSnackbar}
                setSnackbarMessage={setSnackbarMessage}
            />
            <SuccessSnackbar
                openSnackBar={showSuccessSnackbar}
                setOpenSnackBar={setShowSuccessSnackbar}
                snackBarMessage={snackbarMessage}

            />
        </MainWrapper>
    )
}

export default Calendar