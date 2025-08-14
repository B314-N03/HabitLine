import StyledTextField from "../../../StyledComponents/StyledTextField/StyledTextField";


interface CalendarTypeTitleInputProps {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
}

function CalendarTypeTitleInput({ title, setTitle }: CalendarTypeTitleInputProps) {
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

export default CalendarTypeTitleInput