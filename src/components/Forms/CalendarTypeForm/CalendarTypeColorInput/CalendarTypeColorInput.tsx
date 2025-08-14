import StyledTextField from "../../../StyledComponents/StyledTextField/StyledTextField";


interface CalendarTypeColorInputProps {
    color: `#${string}`;
    setColor: React.Dispatch<React.SetStateAction<`#${string}`>>;
}


function CalendarTypeColorInput({ color, setColor }: CalendarTypeColorInputProps) {
    return (
        <StyledTextField
            label="Color"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value as `#${string}`)}
            fullWidth
            required
        />
    )
}

export default CalendarTypeColorInput