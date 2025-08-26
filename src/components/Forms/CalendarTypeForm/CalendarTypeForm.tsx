import { useState } from "react";
import CalendarTypeTitleInput from "./CalendarTypeTitleInput/CalendarTypeTitleInput";
import CalendarTypeColorInput from "./CalendarTypeColorInput/CalendarTypeColorInput";
import CalendarTypeDescriptionInput from "./CalendarTypeDescriptionInput/CalendarTypeDescriptionInput";
import styles from "./calendar_type_form.module.scss";
import IconButtonHL from "../../Widgets/Buttons/IconButton";
import CheckMark from '@mui/icons-material/Check';
import { useCreateOrUpdateCalendarType } from "../../../hooks/useCalendarTypes";

interface CalendarTypeFormProps {
    customClassName?: string;
    id?: string;
    isEditing?: boolean;
}

function CalendarTypeForm({ customClassName, id = "", isEditing }: CalendarTypeFormProps) {
    const [calendarTypeTitle, setCalendarTypeTitle] = useState("");
    const [calendarTypeColor, setCalendarTypeColor] = useState<`#${string}`>("#000000");
    const [calendarTypeDescription, setCalendarTypeDescription] = useState("");
    const mutation = useCreateOrUpdateCalendarType();

    const handleSave = () => {
        mutation.mutate(
            {
                id,
                label: calendarTypeTitle,
                darkColors: {
                    main: calendarTypeColor,
                    container: calendarTypeColor,
                    onContainer: calendarTypeColor
                },
                lightColors: {
                    main: calendarTypeColor,
                    container: calendarTypeColor,
                    onContainer: calendarTypeColor
                },
                colorName: calendarTypeTitle,
                isEditing: isEditing || false,
            },
            {
                onSuccess: () => {
                    setCalendarTypeTitle("");
                    setCalendarTypeColor("#000000");
                    setCalendarTypeDescription("");
                    console.log("Calendar Type saved successfully");
                },
                onError: (error) => {
                    console.error("Error saving calendar type:", error);
                },
            }
        );
    }

    return (
        <div className={`${styles.calendarTypeForm} ${customClassName}`}>
            <CalendarTypeTitleInput
                title={calendarTypeTitle}
                setTitle={setCalendarTypeTitle}
            />
            <CalendarTypeColorInput
                color={calendarTypeColor}
                setColor={setCalendarTypeColor}
            />
            <CalendarTypeDescriptionInput
                description={calendarTypeDescription}
                setDescription={setCalendarTypeDescription}
            />

            <IconButtonHL
                onClick={handleSave}
                variant="contained"
                title="Save Calendar Type"
                icon={<CheckMark />}
            />


        </div>
    )
}

export default CalendarTypeForm