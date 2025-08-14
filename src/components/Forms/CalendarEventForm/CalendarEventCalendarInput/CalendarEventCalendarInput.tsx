import type { CalendarType } from '@schedule-x/calendar';
import React from 'react'
import StyledTextField from '../../../StyledComponents/StyledTextField/StyledTextField';
import { MenuItem } from '@mui/material';
import { AddButton } from '../../../Widgets/Buttons/AddButton';
import styles from './calendar_event_calendar_input.module.scss';
import CalendarTypeForm from '../../CalendarTypeForm/CalendarTypeForm';

interface CalendarEventCalendarInputProps {
    calendarId: string;
    setCalendarId: React.Dispatch<React.SetStateAction<string>>;
    calendars: CalendarType[];
    showAddNewCalendar: boolean;
    setShowAddNewCalendar: React.Dispatch<React.SetStateAction<boolean>>;
}

function CalendarEventCalendarInput({
    calendarId,
    setCalendarId,
    calendars,
    setShowAddNewCalendar,
    showAddNewCalendar
}: CalendarEventCalendarInputProps) {



    return (
        <div className={styles.calendarEventCalendarInput}>
            {calendars.length > 0 ?
                <StyledTextField
                    select
                    label="Calendar"
                    value={calendarId}
                    required
                    onChange={e => setCalendarId(e.target.value)}
                    fullWidth>
                    {calendars?.map(calendar => (
                        <MenuItem key={calendar.label} value={calendar.label}>
                            {calendar.label}
                        </MenuItem>
                    ))}
                </StyledTextField>
                : <StyledTextField
                    label="No Calendars, please add one!"
                    onChange={e => setCalendarId(e.target.value)}
                    fullWidth
                    hasError
                    className={styles.noCalendars}
                    disabled
                />
            }

            <AddButton
                onClick={() => setShowAddNewCalendar(!showAddNewCalendar)}
                variant="outlined"
                title={showAddNewCalendar ? "Hide" : "Add"}
                customClassName={styles.addButton}
            />
            {showAddNewCalendar && (
                <CalendarTypeForm customClassName={styles.addNewCalendar} />
            )}
        </div>
    )
}

export default CalendarEventCalendarInput