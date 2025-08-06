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

function Calendar() {
    const eventsService = useState(() => createEventsServicePlugin())[0]
    const { theme } = useContext(ThemeContext)
    const calendar = useCalendarApp({
        views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
        events: [
            {
                id: '1',
                title: 'Project 1',
                start: '2025-08-06 06:00',
                end: '2025-08-06 10:00',
            },
            {
                id: '2',
                title: 'Project 2',
                start: '2025-08-07 06:00',
                end: '2025-08-07 10:00',
                people: ['John Doe', 'Jane Doe'],
            },
            {
                id: '3',
                title: 'Vacation',
                start: '2025-08-06',
                end: '2025-08-10',
            },
        ],
        plugins: [eventsService, createDragAndDropPlugin(), createEventModalPlugin()],
        isDark: theme === 'dark',
    })

    useEffect(() => {
        eventsService.getAll()
        calendar?.setTheme(theme === 'dark' ? 'dark' : 'light')
    }, [theme, eventsService])

    return (
        <MainWrapper>
            <ScheduleXCalendar calendarApp={calendar} />
        </MainWrapper>
    )
}

export default Calendar