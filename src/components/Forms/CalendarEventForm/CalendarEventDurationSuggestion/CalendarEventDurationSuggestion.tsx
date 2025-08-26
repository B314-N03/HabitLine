import IconButtonHL from '../../../Widgets/Buttons/IconButton'
import { Timer } from '@mui/icons-material'
import styles from './calendar_event_duration_suggestion.module.scss'

interface CalendarEventDurationSuggestion {
    handleEventDurationClick: (duration: number) => void
}

function CalendarEventDurationSuggestion(props: CalendarEventDurationSuggestion) {
    const { handleEventDurationClick } = props

    const eventDurationSuggestion = [
        {
            label: "15 min",
            value: 15
        },
        {
            label: "30 min",
            value: 30
        },
        {
            label: "1 hour",
            value: 60
        },
        {
            label: "2 hours",
            value: 120
        },
    ]
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
            {eventDurationSuggestion.map((suggestion) => (
                <IconButtonHL
                    variant='outlined'
                    icon={<Timer />}
                    key={suggestion.label}
                    customClass={styles.eventDurationSuggestion}
                    title={suggestion.label}
                    onClick={() => handleEventDurationClick(suggestion.value)} />
            ))}
        </div>
    )
}

export default CalendarEventDurationSuggestion
