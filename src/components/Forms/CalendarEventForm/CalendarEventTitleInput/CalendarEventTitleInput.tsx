import React from 'react'
import StyledTextField from '../../../StyledComponents/StyledTextField/StyledTextField';

interface CalendarEventTitleInputProps {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
}

function CalendarEventTitleInput({ title, setTitle }: CalendarEventTitleInputProps) {
    return (
        <StyledTextField
            label="Title"
            value={title}
            required
            onChange={e => setTitle(e.target.value)}
            fullWidth
        />
    )
}

export default CalendarEventTitleInput