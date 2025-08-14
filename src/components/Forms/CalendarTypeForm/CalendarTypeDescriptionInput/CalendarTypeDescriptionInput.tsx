import StyledTextField from "../../../StyledComponents/StyledTextField/StyledTextField";


interface CalendarTypeDescriptionInputProps {
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
}

function CalendarTypeDescriptionInput({ description, setDescription }: CalendarTypeDescriptionInputProps) {
    return (
        <StyledTextField
            label="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={4}
            required
        />
    )
}

export default CalendarTypeDescriptionInput