import React from 'react'
import StyledTextField from '../../../StyledComponents/StyledTextField/StyledTextField';


interface CalendarEventDateTimeInputProps {
    label: string;
    date: string;
    setDate: React.Dispatch<React.SetStateAction<string>>;
}

function CalendarEventDateTimeInput({ date, setDate, label }: CalendarEventDateTimeInputProps) {
    return (
        <StyledTextField
            label={label}
            type="datetime-local"
            value={date}
            onChange={e => setDate(e.target.value)}
            fullWidth
            required
        />
    )
}

export default CalendarEventDateTimeInput