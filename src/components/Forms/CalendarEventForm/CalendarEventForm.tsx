
import type { CalendarType } from '@schedule-x/calendar';
import styles from './calendar_event_form.module.scss'
import CalendarEventDateTimeInput from './CalendarEventDateTimeInput/CalendarEventDateTimeInput';
import CalendarEventTitleInput from './CalendarEventTitleInput/CalendarEventTitleInput';
import CalendarEventCalendarInput from './CalendarEventCalendarInput/CalendarEventCalendarInput';
import CalendarEventPersonsInput from './CalendarEventPersonsInput/CalendarEventPersonsInput';

interface CalendarEventFormProps {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    startDate: string;
    setStartDate: React.Dispatch<React.SetStateAction<string>>;
    endDate: string;
    setEndDate: React.Dispatch<React.SetStateAction<string>>;
    calendarId: string;
    setCalendarId: React.Dispatch<React.SetStateAction<string>>;
    people: string[];
    setPeople: React.Dispatch<React.SetStateAction<string[]>>;
    newPerson: string;
    setNewPerson: React.Dispatch<React.SetStateAction<string>>;
    calendars: CalendarType[];
    showAddNewCalendar: boolean;
    setShowAddNewCalendar: React.Dispatch<React.SetStateAction<boolean>>;
}

function CalendarEventForm({ title, setTitle, startDate, setStartDate, endDate, setEndDate, calendarId, setCalendarId, people, setPeople, newPerson, setNewPerson, calendars, showAddNewCalendar, setShowAddNewCalendar }: CalendarEventFormProps) {
    return (
        <div className={styles.calendarEventForm}>
            <CalendarEventTitleInput title={title} setTitle={setTitle} />
            <div style={{ display: "flex", gap: 16 }}>
                <CalendarEventDateTimeInput label="Start" date={startDate} setDate={setStartDate} />
                <CalendarEventDateTimeInput label="End" date={endDate} setDate={setEndDate} />
            </div>
            <div style={{ display: "flex", gap: 16 }}>
                <CalendarEventCalendarInput
                    calendarId={calendarId}
                    setCalendarId={setCalendarId}
                    calendars={calendars}
                    showAddNewCalendar={showAddNewCalendar}
                    setShowAddNewCalendar={setShowAddNewCalendar}

                />
                <CalendarEventPersonsInput
                    people={people}
                    setPeople={setPeople}
                    newPerson={newPerson}
                    setNewPerson={setNewPerson}
                />
            </div>
        </div>
    )
}

export default CalendarEventForm