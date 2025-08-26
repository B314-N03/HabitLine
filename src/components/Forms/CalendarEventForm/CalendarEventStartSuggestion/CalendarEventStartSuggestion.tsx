import { EditCalendar } from "@mui/icons-material"
import { FormatToScheduleXDate } from "../../../Helpers/FormatToScheduleXDate"
import IconButtonHL from "../../../Widgets/Buttons/IconButton"
import styles from "./calendar_event_start_suggestion.module.scss"

interface CalendarEventStartSuggestionProps {
    handleEventStartClick: (value: string) => void
}

function CalendarEventStartSuggestion(props: CalendarEventStartSuggestionProps) {
    const { handleEventStartClick } = props
    const eventStartSuggestion = [
        {
            label: "Today",
            value: FormatToScheduleXDate(new Date())
        },
        {
            label: "Tomorrow",
            value: FormatToScheduleXDate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000))
        },
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
                    onClick={() => handleEventStartClick(suggestion.value)} />
            ))}
        </div>
    )
}

export default CalendarEventStartSuggestion
