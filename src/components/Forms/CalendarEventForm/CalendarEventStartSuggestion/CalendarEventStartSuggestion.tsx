import { EditCalendar } from "@mui/icons-material"
import { FormatToScheduleXDate } from "../../../Helpers/FormatToScheduleXDate"
import IconButtonHL from "../../../Widgets/Buttons/IconButton"
import styles from "./calendar_event_start_suggestion.module.scss"

interface CalendarEventStartSuggestionProps {
    handleEventStartClick: (value: string, setStart: boolean) => void
}

function CalendarEventStartSuggestion(props: CalendarEventStartSuggestionProps) {
    const { handleEventStartClick } = props
    const today = new Date();
    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const oneWeek = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
    const eventStartSuggestion = [
        {
            label: "Today",
            value: FormatToScheduleXDate(today),
            setStart: true
        },
        {
            label: "Tomorrow",
            value: FormatToScheduleXDate(tomorrow),
            setStart: true
        },
        {
            label: "1 Week",
            value: FormatToScheduleXDate(oneWeek),
            setStart: false
        }
    ]
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
            {eventStartSuggestion.map((suggestion) => (
                <IconButtonHL
                    variant='outlined'
                    color='secondary'
                    icon={<EditCalendar />}
                    key={suggestion.label}
                    customClass={styles.eventStartSuggestion}
                    title={suggestion.label}
                    onClick={() => handleEventStartClick(suggestion.value, suggestion.setStart)} />
            ))}
        </div>
    )
}

export default CalendarEventStartSuggestion
