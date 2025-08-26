
import type { CalendarType } from '@schedule-x/calendar';
import styles from './calendar_event_form.module.scss'
import CalendarEventDateTimeInput from './CalendarEventDateTimeInput/CalendarEventDateTimeInput';
import CalendarEventTitleInput from './CalendarEventTitleInput/CalendarEventTitleInput';
import CalendarEventCalendarInput from './CalendarEventCalendarInput/CalendarEventCalendarInput';
import CalendarEventPersonsInput from './CalendarEventPersonsInput/CalendarEventPersonsInput';
import IconButtonHL from '../../Widgets/Buttons/IconButton';
import { EditCalendar, Timer } from '@mui/icons-material';
import { FormatToScheduleXDate } from '../../Helpers/FormatToScheduleXDate';
import CalendarEventStartSuggestion from './CalendarEventStartSuggestion/CalendarEventStartSuggestion';
import CalendarEventDurationSuggestion from './CalendarEventDurationSuggestion/CalendarEventDurationSuggestion';

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




    const handleEventDurationClick = (value: number) => {
        const start = new Date(startDate);
        start.setMinutes(start.getMinutes() + value);
        const pad = (n: number) => n.toString().padStart(2, '0');
        const endTimeStr = `${start.getFullYear()}-${pad(start.getMonth() + 1)}-${pad(start.getDate())} ${pad(start.getHours())}:${pad(start.getMinutes())}`;
        setEndDate(endTimeStr);
    }

    const handleEventStartClick = (value: string) => {
        setStartDate(value);
        const start = new Date(value);
        start.setMinutes(start.getMinutes() + 60);
        setEndDate(FormatToScheduleXDate(start));
    }
    return (
        <div className={styles.calendarEventForm}>
            <CalendarEventTitleInput title={title} setTitle={setTitle} />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: 16 }}>
                    <CalendarEventDateTimeInput label="Start" date={startDate} setDate={setStartDate} />
                    <CalendarEventDateTimeInput label="End" date={endDate} setDate={setEndDate} />
                </div>
                <CalendarEventStartSuggestion handleEventStartClick={handleEventStartClick} />
                <CalendarEventDurationSuggestion handleEventDurationClick={handleEventDurationClick} />
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